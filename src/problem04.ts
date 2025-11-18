
type RatedItem = {
    title: string;
    rating: number;
}

const filterByRating = (items: RatedItem[]): RatedItem[] => {
    return items.filter(item => item.rating >= 4);
}
