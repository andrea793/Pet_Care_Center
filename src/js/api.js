
const endPoint = "http://localhost:3000/"

export const getUser = async (param) => {
    try {
      const response = await fetch(`${endPoint}${param}`);
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      return await response.json();
    } catch (error) {
      console.error('Error en la petición GET:', error);
      throw error;
    }
}

export const userPost = async (param, newData) => {
    try {
      const response = await fetch(`${endPoint}${param}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error('Error al crear los datos');
      }
      return await response.json();
    } catch (error) {
      console.error('Error en la petición POST:', error);
      throw error;
    }
};

