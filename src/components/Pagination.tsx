"use client"

import { useEffect, useState } from "react"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
type pageInfo = {
  currentPage: number
  lastPage: number
  hasNextPage: boolean
}
export default function NavigatePagination({
  pageInfo,
}: {
  pageInfo: pageInfo
}) {
  const { lastPage, hasNextPage } = pageInfo
  const searchParams = useSearchParams()
  const pageParams = searchParams.get("page") as string
  const pathname = usePathname()
  const { push } = useRouter()

  const params = new URLSearchParams(searchParams)
  let currentPage = Number(pageParams) || 1
  const totalPages = Array.from({ length: pageInfo.lastPage }, (_, i) => i + 1)
  const cuttedPages = totalPages.slice(currentPage - 1, currentPage + 5)

  // Pagination
  function handleNavigateToPage(page: number) {
    let currentPage = page
    if (!pageParams) {
      push(`${pathname}?page=${page}`)
    }
    params.set("page", currentPage.toString())
    push(`${pathname}?${params}`)
  }
  // Next page
  function handleNextPage() {
    if (!pageParams) {
      push(`${pathname}?page=2`)
    }
    if (Number(pageParams) >= 1 && pageInfo.hasNextPage) {
      currentPage++
      params.set("page", currentPage.toString())
      push(`${pathname}?${params}`)
    }
  }
  // Prev page
  function handlePrevPage() {
    if (Number(pageParams) >= 2) {
      currentPage--
      params.set("page", currentPage.toString())
      push(`${pathname}?${params}`)
    } else {
      params.set("page", "1")
    }
  }

  if (totalPages.length < 7) {
    return (
      <main>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handlePrevPage} />
            </PaginationItem>
            {totalPages.map((item, index) => (
              <PaginationItem key={item}>
                <PaginationLink
                  className={currentPage === item ? "border" : ""}
                  onClick={() => handleNavigateToPage(item)}
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext onClick={handleNextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </main>
    )
  }

  return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={handlePrevPage} />
          </PaginationItem>
          {currentPage >= 2 && (
            <PaginationItem>
              <PaginationLink href={`${pathname}?page=1`}>1</PaginationLink>
            </PaginationItem>
          )}
          {currentPage >= 2 && (
            <>
              <PaginationItem className="cursor-default">
                <PaginationEllipsis />
              </PaginationItem>
            </>
          )}
          {cuttedPages.map((item, index) => (
            <PaginationItem key={item}>
              <PaginationLink
                className={currentPage === item ? "border" : ""}
                onClick={() => handleNavigateToPage(item)}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          ))}
          {lastPage > 6 && (
            <>
              <PaginationItem className="cursor-default">
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={`${pathname}?page=${lastPage}`}>
                  {lastPage}
                </PaginationLink>
              </PaginationItem>
            </>
          )}

          <PaginationItem>
            <PaginationNext onClick={handleNextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
  )
}
