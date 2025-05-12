import instance from "./axios";

const API = 'http://localhost:3001/api';

export const registerRequest = async (user) => await instance().post(`/register`, user);
export const registerAbogaRequest = async (abogado) => await instance().post(`/abogadoregister`, abogado);
export const loginRequest = async (user) => await instance().post(`/login`, user);
export const loginRequestAbogado = async (abogado) => await instance().post(`/abogadologin`, abogado);
export const getAbogadoByCategoryRequest = async (category) => await instance().get(`/filterabogados/${category}`);
export const verifyTokenRequest = async () => await instance().get(`/verify`);
export const getAbogadosData = async () => await instance().get(`/allabogados`);


