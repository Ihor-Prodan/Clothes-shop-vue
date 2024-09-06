import { defineStore } from 'pinia';

export const useFilterStore = defineStore('filter', {
  state: () => ({
    selectedClothesType: [] as string[],
    selectedStyleType: [] as string[],
    selectedSize: '' as string,
    priceRange: [0, 100] as [number, number],
  }),
  actions: {
    setSelectedClothesType(types: string[]) {
      this.selectedClothesType = types;
    },
    setSelectedStyleType(styles: string[]) {
      this.selectedStyleType = styles;
    },
    setSelectedSize(size: string) {
      this.selectedSize = size;
    },
    setPriceRange(range: [number, number]) {
      this.priceRange = range;
    },
    resetFilters() {
      this.selectedClothesType = [];
      this.selectedStyleType = [];
      this.selectedSize = '';
      this.priceRange = [0, 100];
    },
  },
  getters: {
    hasActiveFilters: (state) => {
      return (
        state.selectedClothesType.length > 0 ||
        state.selectedStyleType.length > 0 ||
        state.selectedSize !== '' ||
        state.priceRange[0] > 0 ||
        state.priceRange[1] < 100
      );
    },
    filteredItems: (state) => {
      return (items: any[]) => {
        return items.filter((item) => {
          return (
            (state.selectedClothesType.length === 0 ||
              state.selectedClothesType.some(
                (selected) => selected === item.type
              )) &&
            (state.selectedStyleType.length === 0 ||
              state.selectedStyleType.includes(item.style)) &&
            (state.selectedSize === '' || item.size === state.selectedSize) &&
            item.price >= state.priceRange[0] &&
            item.price <= state.priceRange[1]
          );
        });
      };
    },
  },
});
