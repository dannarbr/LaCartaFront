// utils/validators.js

export const Validators = {
  // Validación de campo requerido
  required: (message = 'Este campo es obligatorio') => ({
    validator(_, value) {
      if (!value || (Array.isArray(value) && value.length === 0)) {
        return Promise.reject(new Error(message));
      }
      return Promise.resolve();
    },
  }),

  // Validación de email
  email: (message = 'Por favor ingrese un email válido') => ({
    validator(_, value) {
      if (!value) return Promise.resolve(); // Si no es requerido, dejamos pasar si está vacío
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return Promise.reject(new Error(message));
      }
      return Promise.resolve();
    },
  }),

  // Validación de longitud mínima
  minLength: (min, message = `Debe tener al menos ${min} caracteres`) => ({
    validator(_, value) {
      if (value && value.length < min) {
        return Promise.reject(new Error(message));
      }
      return Promise.resolve();
    },
  }),

  // Validación de longitud máxima
  maxLength: (max, message = `Debe tener como máximo ${max} caracteres`) => ({
    validator(_, value) {
      if (value && value.length > max) {
        return Promise.reject(new Error(message));
      }
      return Promise.resolve();
    },
  }),

  // Validación de selección en Select (para asegurar que se eligió una opción válida)
  selectRequired: (message = 'Por favor seleccione una opción') => ({
    validator(_, value) {
      if (!value || value === undefined || value === null) {
        return Promise.reject(new Error(message));
      }
      return Promise.resolve();
    },
  }),

  // Validación de imagen (para Upload de Ant Design)
  imageRequired: (message = 'Debe seleccionar una imagen') => ({
    validator(_, fileList) {
      if (!fileList || fileList.length === 0) {
        return Promise.reject(new Error(message));
      }
      return Promise.resolve();
    },
  }),

  // Validación de tipo de imagen (jpg, png, etc.)
  imageType: (allowedTypes = ['image/jpeg', 'image/png'], message = 'Solo se permiten imágenes JPG/PNG') => ({
    validator(_, fileList) {
      if (!fileList || fileList.length === 0) return Promise.resolve();

      const invalidFiles = fileList.filter(file => {
        // file.type viene del navegador, pero a veces no está, entonces usamos también la extensión
        const extension = file.name.split('.').pop().toLowerCase();
        const validExtensions = allowedTypes.map(type => type.split('/')[1]);
        return !allowedTypes.includes(file.type) && !validExtensions.includes(extension);
      });

      if (invalidFiles.length > 0) {
        return Promise.reject(new Error(message));
      }
      return Promise.resolve();
    },
  }),

  // Validación de tamaño máximo de imagen (en bytes)
  imageSize: (maxSize = 2 * 1024 * 1024, message = 'La imagen debe pesar menos de 2MB') => ({
    validator(_, fileList) {
      if (!fileList || fileList.length === 0) return Promise.resolve();

      const oversizedFiles = fileList.filter(file => file.size > maxSize);
      if (oversizedFiles.length > 0) {
        return Promise.reject(new Error(message));
      }
      return Promise.resolve();
    },
  }),
};