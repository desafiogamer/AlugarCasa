export interface ApartamentosInterface{
    src: string,
    alt: string,
    title:string,
    star:string,
    nota: string,
    local: string,
    price: string
}

export interface SecaoApartamentosInterface {
    title: string,
    subtitle?: string,
    itens: ApartamentosInterface[]
}
