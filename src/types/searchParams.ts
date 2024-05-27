// export type Page = {
//     searchParams: { [key: string]: any }
//   }
export type Page = {
  searchParams?: {
    page?: string
    search?: string
    order?: string
    genre?:  string | string[]
    tag?:  string | string[]
  }
}
