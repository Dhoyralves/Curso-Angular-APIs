export interface Celular {
    id: number;
    nome: string;
    descricao?: string;//o ? diz que ele é opcional
    esgotado: boolean;
}