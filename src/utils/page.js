
export default (_t) => {
  return {
    handlePageChange(val) {
      this.page.current = val
      this.search()
    },
    handleSizeChange(val) {
      this.page.size = val
      this.search()
    },
    thePrevPage() {
      this.page.current -= 1
      this.search()
    },
    theNextPage() {
      this.page.current += 1
      this.search()
    }
  }
}