import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const MainLogo = () => {
    return (
        <LogoLink to="/">
            <Logo>
                <svg width="154" height="36" viewBox="0 0 154 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path1
                        d="M0.872002 28.04C9.64 28.52 15.576 28.76 18.68 28.76C19.416 28.76 19.992 28.552 20.408 28.136C20.856 27.688 21.08 27.096 21.08 26.36V22.04H10.04C6.68 22.04 4.232 21.288 2.696 19.784C1.192 18.248 0.440002 15.8 0.440002 12.44V11C0.440002 7.64 1.192 5.208 2.696 3.704C4.232 2.168 6.68 1.4 10.04 1.4H26.888V8.12H11.96C10.04 8.12 9.08 9.08 9.08 11V11.96C9.08 13.88 10.04 14.84 11.96 14.84H20.6C23.736 14.84 26.04 15.576 27.512 17.048C28.984 18.52 29.72 20.824 29.72 23.96V26.36C29.72 29.496 28.984 31.8 27.512 33.272C26.04 34.744 23.736 35.48 20.6 35.48C18.968 35.48 17.24 35.448 15.416 35.384L11 35.192C7.736 35.032 4.36 34.808 0.872002 34.52V28.04Z"
                        fill="white"
                    />
                    <Path2
                        d="M43.3963 15.08C42.1163 15.08 41.4763 15.72 41.4763 17V19.64H49.6363V17C49.6363 15.72 48.9963 15.08 47.7163 15.08H43.3963ZM57.0763 34.52C50.9003 35.16 45.3003 35.48 40.2763 35.48C38.1003 35.48 36.3563 34.824 35.0443 33.512C33.7323 32.2 33.0763 30.456 33.0763 28.28V16.76C33.0763 14.36 33.7483 12.488 35.0923 11.144C36.4683 9.768 38.3563 9.08 40.7563 9.08H50.3563C52.7563 9.08 54.6283 9.768 55.9723 11.144C57.3483 12.488 58.0363 14.36 58.0363 16.76V25.64H41.4763V27.56C41.4763 28.04 41.6363 28.44 41.9563 28.76C42.2763 29.08 42.6763 29.24 43.1563 29.24C46.3243 29.24 50.9643 29 57.0763 28.52V34.52Z"
                        fill="white"
                    />
                    <Path3
                        d="M76.9775 16.52C74.9615 16.52 72.8815 17 70.7375 17.96V35H62.3375V9.56H69.7775L70.2575 12.68C73.0095 10.28 75.8895 9.08 78.8975 9.08H81.0575V16.52H76.9775Z"
                        fill="white"
                    />
                    <Path4
                        d="M94.9756 10.52V35H86.5756V17H82.9756V10.52H94.9756ZM86.5756 0.919998H94.9756V7.64H86.5756V0.919998Z"
                        fill="white"
                    />
                    <Path5
                        d="M109.631 15.08C108.351 15.08 107.711 15.72 107.711 17V19.64H115.871V17C115.871 15.72 115.231 15.08 113.951 15.08H109.631ZM123.311 34.52C117.135 35.16 111.535 35.48 106.511 35.48C104.335 35.48 102.591 34.824 101.279 33.512C99.9666 32.2 99.3106 30.456 99.3106 28.28V16.76C99.3106 14.36 99.9826 12.488 101.327 11.144C102.703 9.768 104.591 9.08 106.991 9.08H116.591C118.991 9.08 120.863 9.768 122.207 11.144C123.583 12.488 124.271 14.36 124.271 16.76V25.64H107.711V27.56C107.711 28.04 107.871 28.44 108.191 28.76C108.511 29.08 108.911 29.24 109.391 29.24C112.559 29.24 117.199 29 123.311 28.52V34.52Z"
                        fill="white"
                    />
                    <Path6
                        d="M127.612 28.28C134.108 28.76 139.228 29 142.972 29C143.452 29 143.852 28.84 144.172 28.52C144.492 28.2 144.652 27.8 144.652 27.32V25.64H134.332C132.156 25.64 130.412 24.984 129.1 23.672C127.788 22.36 127.132 20.616 127.132 18.44V16.76C127.132 14.584 127.788 12.84 129.1 11.528C130.412 10.216 132.156 9.56 134.332 9.56H150.652V15.8H137.212C136.732 15.8 136.332 15.96 136.012 16.28C135.692 16.6 135.532 17 135.532 17.48C135.532 17.96 135.692 18.36 136.012 18.68C136.332 19 136.732 19.16 137.212 19.16H145.852C148.028 19.16 149.772 19.816 151.084 21.128C152.396 22.44 153.052 24.184 153.052 26.36V28.28C153.052 30.456 152.396 32.2 151.084 33.512C149.772 34.824 148.028 35.48 145.852 35.48C140.188 35.48 134.108 35.16 127.612 34.52V28.28Z"
                        fill="white"
                    />
                </svg>
                <Now>
                    <svg width="71" height="24" viewBox="0 0 71 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.44 23H14.36L6.68 9.56V23H0.919998V0.599998H7L14.68 14.04V0.599998H20.44V23Z" fill="#FF0000" />
                        <path
                            d="M41.255 18.2C41.255 19.8 40.7963 21.0587 39.879 21.976C38.983 22.872 37.735 23.32 36.135 23.32H28.775C27.175 23.32 25.9163 22.872 24.999 21.976C24.103 21.0587 23.655 19.8 23.655 18.2V10.84C23.655 9.24 24.103 7.992 24.999 7.096C25.9163 6.17867 27.175 5.72 28.775 5.72H36.135C37.735 5.72 38.983 6.17867 39.879 7.096C40.7963 7.992 41.255 9.24 41.255 10.84V18.2ZM35.655 11.32C35.655 10.4667 35.2283 10.04 34.375 10.04H30.535C29.6817 10.04 29.255 10.4667 29.255 11.32V17.72C29.255 18.5733 29.6817 19 30.535 19H34.375C35.2283 19 35.655 18.5733 35.655 17.72V11.32Z"
                            fill="#FF0000"
                        />
                        <path
                            d="M61.7387 16.28L64.6188 6.04H70.6988L65.4187 23H59.4987L56.2988 12.76L53.0987 23H47.1787L41.8988 6.04H47.9788L50.8587 16.28L53.7387 6.04H58.8587L61.7387 16.28Z"
                            fill="#FF0000"
                        />
                    </svg>
                </Now>
            </Logo>
        </LogoLink>
    );
};

const LogoLink = styled(Link)`
    color: white;
    display: flex;
    justify-content: center;
    text-decoration: none;
    font-size: 3rem;
`;

const Logo = styled.div`
    display: flex;
    padding: 0 5px;
`;

const NowAnimation = keyframes`
   from {
       transform: translateY(-100%);
   }
   to {
       display: flex;
   }
`;

const SeriesAnimation = keyframes`
    from {
        transform: translateX(-100%);
    }
`;

const Now = styled.div`
    animation: ${NowAnimation} 1.6s;
`;

const Path1 = styled.path`
    animation: 1.2s ${SeriesAnimation};
`;

const Path2 = styled.path`
    animation: 1s ${SeriesAnimation};
`;

const Path3 = styled.path`
    animation: 0.8s ${SeriesAnimation};
`;

const Path4 = styled.path`
    animation: 0.6s ${SeriesAnimation};
`;

const Path5 = styled.path`
    animation: 0.4s ${SeriesAnimation};
`;

const Path6 = styled.path`
    animation: 0.2s ${SeriesAnimation};
`;

export default MainLogo;
