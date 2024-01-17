const createURL = (path) => {
    return window.location.origin + path
}

export const createEntry = async () => {
    const res = await fetch(
      new Request(createURL('/api/home'), {
        method: 'POST',
      })
    )
      
    if (res.ok) {
      return res.json()
    } else {
      throw new Error("Something went wrong on API server!")
    }
  }
