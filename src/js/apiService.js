export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImages(searchQuery) {
    this.page = 1;
    const newQuery = searchQuery.trim();
    if (newQuery === '') return false;
    this.searchQuery = newQuery;
    const result = this.fetchIt();
    return result;
  }

  moreImages() {
    const result = this.fetchIt();
    return result;
  }

  async fetchIt() {
    try {
      const data = await fetch(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=23001372-4089cd7875776b7c1dfb830c2`,
      );
      return (await data.json()).hits;
    } catch (err) {
      console.log(err);
    }
  }

  needMore() {
    return this.page !== 1;
  }

  incrementPage() {
    this.page += 1;
  }
}
