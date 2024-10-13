import { defineStore } from 'pinia';

export const useFilterStore = defineStore('filter', {
  state: () => ({
    selectedSexType: ['All clothes'],
    selectedClothesType: [] as string[],
    selectedStyleType: [] as string[],
    selectedSize: '' as string,
    priceRange: [0, 100] as [number, number],
  }),
  actions: {
    setSelectedClothesType(types: string[]) {
      this.selectedClothesType = types;
    },
    setSelectedSexType(sex: string[]) {
      if (sex.includes('All clothes')) {
        this.selectedSexType = ['All clothes'];
      } else {
        this.selectedSexType = sex;
      }
    },
    setSelectedStyleType(styles: string[]) {
      if (styles.includes('All styles')) {
        this.selectedStyleType = ['All styles'];
      } else {
        this.selectedStyleType = styles;
      }
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
        state.selectedSexType.length > 0 ||
        state.selectedStyleType.length > 0 ||
        state.selectedSize !== '' ||
        state.priceRange[0] > 0 ||
        state.priceRange[1] < 100
      );
    },
    filteredItems: (state) => {
      return (items: any[]) => {
        return items.filter((item) => {
          const matchesType =
            state.selectedClothesType.includes('All types') ||
            state.selectedClothesType.length === 0 ||
            state.selectedClothesType.some(
              (selected) => selected === item.type
            );

          const matchesStyle =
            state.selectedStyleType.includes('All styles') ||
            state.selectedStyleType.length === 0 ||
            state.selectedStyleType.includes(item.style);

          const matchesSex =
            state.selectedSexType.includes('All clothes') ||
            state.selectedSexType.length === 0 ||
            state.selectedSexType.includes(item.sex);

          const matchesSize =
            state.selectedSize === 'ALL' ||
            state.selectedSize === '' ||
            item.large.includes(state.selectedSize);

          const matchesPrice =
            item.price >= state.priceRange[0] &&
            item.price <= state.priceRange[1];

          return (
            matchesType &&
            matchesStyle &&
            matchesSize &&
            matchesPrice &&
            matchesSex
          );
        });
      };
    },
  },
});
