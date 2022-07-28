export interface BookData {
    book_id?: number,
    name?: string,
    cover?: string,
    url?:string,
    authors?: authors[],
    rating?: number,
    created_editions?: number,
    year?: number
}

export interface authors {
    name?: string
}