/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/context/LoadingContext.js

import React, { createContext, useContext, useState } from 'react';

const LoadingContext = createContext();

export const useLoading = () => {
    return useContext(LoadingContext);
};

export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};
