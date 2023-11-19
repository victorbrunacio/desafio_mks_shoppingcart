

const getProducts = async () => {
  // claro que por ser um teste não fiz o .env escondendo a url
    const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC')
      const data = await response.json()
      return data
}

export default getProducts