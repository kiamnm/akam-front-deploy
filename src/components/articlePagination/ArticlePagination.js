'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import './style.css'

export default function ArticlePagination({ currentPage, totalPages }) {
  const router = useRouter()

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      router.push(`/blog/all?page=${page}`)
    }
  }

  const getPageNumbers = () => {
    const pages = []

    let startPage = Math.max(currentPage - 2, 1)
    let endPage = Math.min(startPage + 3, totalPages)

    // Ensure always 4 pages max
    if (endPage - startPage < 3) {
      startPage = Math.max(endPage - 3, 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  }

  return (
    <div className="pagination d-flex gap-3 flex-wrap justify-content-center w-100">
      {/* Previous Arrow */}
      <button
        className={`arrow ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
       
        &gt;
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => goToPage(pageNum)}
          className={`page-number anjoman_num_regular ${currentPage === pageNum ? 'active' : ''}`}
        >
          {pageNum}
        </button>
      ))}

      {/* Next Arrow */}
      <button
        className={`arrow ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
         &lt;
      </button>
    </div>
  )
}
