//RESUELVE TUS EJERCICIOS AQUI
//RESUELVE TUS EJERCICIOS AQUI
// 1.- Declara una funcion getAllBreeds que devuelva un array de strings con todas las razas de perro.
const getAllBreeds = async () => {
    try {
      const respuesta = await fetch('https://dog.ceo/api/breeds/list/all', {
        method: 'GET',
      });
      if (!respuesta.ok) {
        return Promise.reject(new Error(`¡Error HTTP! Estado: ${respuesta.status}`));
      } else {
        let respuestaOK = await respuesta.json();
        const array = Object.keys(respuestaOK.message);
        return array;
      }
    } catch (error) {
      throw error;
    }
  };

// 2.- Declara una función getRandomDog que obtenga una imagen random de una raza.
const getRandomDog = async () => {
    try {
      const respuesta = await fetch('https://dog.ceo/api/breeds/image/random', {
        method: 'GET',
      });
      if (!respuesta.ok) {
        return Promise.reject(new Error(`¡Error HTTP! Estado: ${respuesta.status}`));
      } else {
        let respuestaOK = await respuesta.json();
        const imagen = respuestaOK.message;
        return imagen;
      }
    } catch (error) {
      throw error;
    }
  };
  
// 3.- Declara una función getAllImagesByBreed que obtenga todas las imágenes de la raza komondor.
const getAllImagesByBreed = async () => {
    try {
      const respuesta = await fetch('https://dog.ceo/api/breed/komondor/images', {
        method: 'GET',
      });
      if (!respuesta.ok) {
        return Promise.reject(new Error(`¡Error HTTP! Estado: ${respuesta.status}`));
      } else {
        let respuestaOK = await respuesta.json();
        console.log(respuestaOK);
        const imagenesKomondor = respuestaOK.message;
        console.log(imagenesKomondor);
        return imagenesKomondor;
      }
    } catch (error) {
      throw error;
    }
  };

// 4.- Declara una funcion getAllImagesByBreed2(breed) que devuelva las imágenes de la raza pasada por el argumento
const getAllImagesByBreed2 = async (breed) => {
    try {
      const respuesta = await fetch(`https://dog.ceo/api/breed/${breed}/images`, {
        method: 'GET',
      });
      if (!respuesta.ok) {
        return Promise.reject(
          new Error(`¡Error HTTP! Estado: ${respuesta.status}`)
        );
      } else {
        let respuestaOK = await respuesta.json();
        const imagenesRaza = respuestaOK.message;
        return imagenesRaza;
      }
    } catch (error) {
      throw console.log(`Este es el error: ${error.status}`);
    }
  };

//5.- Declarara una función getGitHubUserProfile(username) 
//que obtenga el perfil de usuario de github a partir de su nombre de usuario.
const getGitHubUserProfile = async (username) => {
    try {
      const respuesta = await fetch(`https://api.github.com/users/${username}`, {
        method: 'GET',
      });
      if (!respuesta.ok) {
        return Promise.reject(
          new Error(`¡Error HTTP! Estado: ${respuesta.status}`)
        );
      } else {
        let respuestaOK = await respuesta.json();
        return respuestaOK;
      }
    } catch (error) {
      throw console.log(`Este es el error: ${error.status}`);
    }
  };

//6.- Declara una función printGithubUserProfile(username) que reciba como argumento 
//el nombre de un usuario (username), retorne {img, name} y pinte la foto y el nombre en el DOM.
const printGithubUserProfile = async (username) => {
    try {
        const respuesta = await fetch(`https://api.github.com/users/${username}`, {
          method: 'GET',
        });
        if (!respuesta.ok) {
          return Promise.reject(
            new Error(`¡Error HTTP! Estado: ${respuesta.status}`)
          );
        } else {
          let respuestaOK = await respuesta.json();
          console.log(respuestaOK);
            return respuestaOK;
        }
      } catch (error) {
        throw console.log(`Este es el error: ${error.status}`);
      }
    //section
};
