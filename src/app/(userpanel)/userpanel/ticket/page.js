import React from 'react'
import "./style.css"
import TicketStatus from '@/components/userPanel/ticketStatus/TicketStatus'
import { TicketProvider } from '@/context/userPanel/Ticket'
import TicketActions from '@/components/userPanel/ticketActions/TicketActions'
import TicketTable from '@/components/userPanel/ticketTable/TicketTable'
import TicketPagination from '@/components/userPanel/ticketPagination/TicketPagination'


export default function Page() {
  return (
    <TicketProvider>
    <div className='tikcet-tab-container px-3 pt-3 d-flex flex-column  flex-grow-1'>
<TicketStatus></TicketStatus>
<TicketActions></TicketActions>
<TicketTable></TicketTable>
<TicketPagination></TicketPagination>
    </div>
  </TicketProvider>
  )
}
