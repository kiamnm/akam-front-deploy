"use client";
import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import "./style.css"

export default function Chart({ data }) {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 320 });
  const [tooltip, setTooltip] = useState({
    visible: false, x: 0, y: 0, value: 0, date: null, rawDate: ""
  });

  // تشخیص موبایل
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      const { width } = entries[0].contentRect;
      setDimensions({ width, height: 320 });
      setIsMobile(width <= 768);
    });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const { width, height } = dimensions;
  if (width === 0) return <div ref={containerRef} style={{ width: "100%" }} />;

  const margin = { top: 20, right: 20, bottom: 40, left: 70 };
  const parseDate = d3.timeParse("%Y/%m/%d");

  // ⬅️ تاریخ خام (جلالی) را هم نگه می‌داریم
  const sortedData = [...data]
    .map(d => {
      const raw = d.date; // مثل "1404/07/23"
      return { date: parseDate(raw), price: +d.price, rawDate: raw };
    })
    .sort((a, b) => a.date - b.date);

  const x = d3.scaleTime()
    .domain(d3.extent(sortedData, d => d.date))
    .range([margin.left, width - margin.right]);

  const yDomain = d3.extent(sortedData, d => d.price);
  const padding = (yDomain[1] - yDomain[0]) * 1;
  const y = d3.scaleLinear()
    .domain([yDomain[0] - padding, yDomain[1] + padding])
    .nice(5)
    .range([height - margin.bottom, margin.top]);

  const line = d3.line()
    .x(d => x(d.date))
    .y(d => y(d.price))
    .curve(d3.curveMonotoneX);

  const bisectDate = d3.bisector(d => d.date).left;

  // ⬅️ فقط tooltip کنار موس و با تاریخ جلالیِ درست
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const mouseDate = x.invert(mouseX);
    const index = bisectDate(sortedData, mouseDate, 1);
    const d0 = sortedData[index - 1];
    const d1 = sortedData[index] || d0;
    const d = mouseDate - d0.date > d1.date - mouseDate ? d1 : d0;

    setTooltip({
      visible: true,
      x: mouseX + 10,
      y: mouseY - 20,
      value: d.price,
      date: d.date,        // نگه می‌داریم؛ شاید بعداً خواستی استفاده کنی
      rawDate: d.rawDate   // ← همین را نمایش می‌دهیم (جلالی)
    });
  };

  const handleMouseLeave = () => setTooltip(t => ({ ...t, visible: false }));

  // فرمت‌کننده: "YYYY/MM/DD" → "DD/MM/YYYY"
  const formatJalaliDMY = (raw) => {
    if (!raw) return "";
    const [y, m, d] = raw.split("/").map(s => s.padStart(2, "0"));
    return `${d}/${m}/${y}`;
  };

  return (
    <div ref={containerRef} style={{ width: "100%", position: "relative" }}>
      <svg viewBox={`0 0 ${width} ${height}`} style={{ width: "100%", height: "auto" }}>
        <path fill="none" stroke="#FF5050" strokeWidth="1" d={line(sortedData)} />

        {!isMobile && (
          <rect
            width={width - margin.left - margin.right}
            height={height - margin.top - margin.bottom}
            x={margin.left}
            y={margin.top}
            fill="transparent"
            style={{ cursor: "crosshair" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        )}

        <g transform={`translate(0,${height - margin.bottom})`} style={{ fontSize: "12px", fontFamily: "anjomanNumMedium" }}
           ref={node => d3.select(node)
             .call(d3.axisBottom(x).ticks(5).tickFormat(d3.timeFormat("%d")).tickSize(-height + margin.top + margin.bottom).tickPadding(20))
             .call(g => { g.selectAll(".tick line").attr("stroke", "#e0e0e0").attr("stroke-width", 0.6); g.selectAll("path").attr("stroke", "rgba(224, 224, 224, 0.1)").attr("stroke-width", 1); })}
        />

        <g transform={`translate(${margin.left},0)`} style={{ fontSize: "12px", fontFamily: "anjomanNumRegular" }}
           ref={node => d3.select(node)
             .call(d3.axisLeft(y).tickValues([y.domain()[0], ...y.ticks(5)]).tickSize(-width + margin.left + margin.right).tickPadding(50))
             .call(g => { g.selectAll(".tick line").attr("stroke", "rgba(224, 224, 224, 1)").attr("stroke-width", 0.6); g.selectAll("path").attr("stroke", "rgba(224, 224, 224, 0.6)").attr("stroke-width", 1); })}
        />
      </svg>

      {!isMobile && tooltip.visible && (
        <div className="trend-tooltip anjoman_num_regular d-flex flex-column align-items-start"
             style={{
               position: 'absolute',
               left: tooltip.x,
               top: tooltip.y,
               background: 'rgba(0,0,0,0.7)',
               color: 'white',
               padding: '4px 8px',
               borderRadius: '4px',
               pointerEvents: 'none',
               fontSize: '12px'
             }}>
          <span>تاریخ : {formatJalaliDMY(tooltip.rawDate)}</span>
          <span>قیمت : {tooltip.value} تومان</span>
        </div>
      )}
    </div>
  );
}
