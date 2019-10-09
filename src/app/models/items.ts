import { Observable } from 'rxjs';
import { Item } from './Item';
export interface Items {
    offset: number;
    limit: number;
    total?: number;
    results: Observable<Item>[];
}