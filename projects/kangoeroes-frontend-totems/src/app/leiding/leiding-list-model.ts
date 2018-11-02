import { Pagination } from '../core/data-services/pagination-model';
import { Leiding } from './leiding.model';

export interface LeidingList {
    leiding: Leiding[];
    pagination: Pagination;
}
