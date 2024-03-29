const createURL = (path) => {
    return window.location.origin + path
}

export const updateFeed = async (id, content, title, isPublic) => {
  const res = await fetch(new Request(createURL(`/api/home/${id}`), {
    method: 'PATCH',
    body: JSON.stringify({ content, title, posted: isPublic })
  }));

  if (res.ok) {
    const data = await res.json();
    return data.data;
  } else {
    throw new Error("Something went wrong on the API server!");
  }
};

export const createEntry = async () => {
    const res = await fetch(
      new Request(createURL('/api/home'), {
        method: 'POST',
      })
    )
      
    if (res.ok) {
      const data = await res.json()
      return data.data
    } else {
      throw new Error("Something went wrong on API server!")
    }
  }
