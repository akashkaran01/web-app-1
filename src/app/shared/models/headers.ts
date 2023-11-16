export interface Header {
    name: string,
    show: boolean,
    subHeaders: SubHeader[]
}

export interface SubHeader {
    name: string
    content: string,
    showSubHeaderContent: boolean,
    subSubHeaderList: string[]
}