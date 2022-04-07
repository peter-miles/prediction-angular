import { Player } from "../player";

export type SortColumn = keyof Player | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

export interface SortEvent {
    column: SortColumn;
    direction: SortDirection;
}
