import useMediaQuery from '@mui/material/useMediaQuery';

export const useTablet = () => {
    return useMediaQuery('(max-width: 900px)')
} 