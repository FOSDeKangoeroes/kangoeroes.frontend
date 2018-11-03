
import { Leiding } from './leiding.model';
import { Pagination } from 'projects/kangoeroes-frontend-leidingbeheer/src/app/models/pagination-model';

export interface LeidingList {
    leiding: Leiding[];
    pagination: Pagination;
}
