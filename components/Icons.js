import Svg, {Circle, Path} from 'react-native-svg';

const Logo = (props) => (
        <Svg
            viewBox="0 0 511.999 511.999"
            {...props}
        >
            <Path
                d="M464.915,496.243H47.085C21.122,496.243,0,475.122,0,449.159V323.905 c0-25.963,21.122-47.087,47.085-47.087h118.403c20.266,0,36.756,16.488,36.756,36.756v33.706h107.512v-33.706 c0-20.266,16.488-36.756,36.756-36.756h118.403c25.963,0,47.085,21.122,47.085,47.087v125.255 C512,475.122,490.878,496.243,464.915,496.243z M47.085,306.075c-9.83,0-17.828,7.999-17.828,17.829v125.255 c0,9.83,7.997,17.828,17.828,17.828h417.83c9.83,0,17.828-7.997,17.828-17.828V323.905c0-9.83-7.997-17.829-17.828-17.829H346.512 c-4.135,0-7.499,3.365-7.499,7.499v48.334c0,8.078-6.549,14.629-14.629,14.629H187.616c-8.079,0-14.629-6.551-14.629-14.629v-48.334 c0-4.134-3.363-7.499-7.499-7.499H47.085z"
                fill="#AB47BC"
            />
            <Path
                d="M359.933,30.384H152.067c-7.605,0-13.771,6.166-13.771,13.771v158.579 c0,7.605,6.166,13.771,13.771,13.771h68.008l35.925,47.593l35.925-47.593h68.008c7.605,0,13.771-6.166,13.771-13.771V44.156 C373.704,36.55,367.538,30.384,359.933,30.384z"
                fill="#F4B2B0"
            />
            <Path
                d="M256.001,278.727c-4.589,0-8.912-2.153-11.675-5.816l-31.535-41.778h-60.722 c-15.66,0-28.4-12.74-28.4-28.4V44.156c0-15.66,12.74-28.4,28.4-28.4h207.865c15.66,0,28.4,12.74,28.4,28.4v158.577 c0,15.66-12.74,28.4-28.4,28.4h-60.722l-31.535,41.778C264.911,276.574,260.588,278.727,256.001,278.727z M152.925,201.876h67.151 c4.589,0,8.912,2.153,11.675,5.816l24.25,32.124l24.248-32.124c2.765-3.663,7.088-5.816,11.675-5.816h67.151V45.013H152.925 V201.876z"
                fill="#AB47BC"
            />
            <Path
                d="M256.001,185.439c-8.079,0-14.629-6.551-14.629-14.629V84.741c0-8.078,6.549-14.629,14.629-14.629 s14.629,6.551,14.629,14.629v86.069C270.629,178.89,264.079,185.439,256.001,185.439z"
                fill="#AB47BC"
            />
            <Path
                d="M299.035,142.404h-86.07c-8.079,0-14.629-6.551-14.629-14.629c0-8.078,6.549-14.629,14.629-14.629 h86.07c8.079,0,14.629,6.551,14.629,14.629C313.664,135.854,307.115,142.404,299.035,142.404z"
                fill="#AB47BC"
            />
            <Path
                d="M116.663,431.056H18.651c-8.079,0-14.629-6.551-14.629-14.629c0-8.078,6.549-14.629,14.629-14.629 h98.012c8.079,0,14.629,6.551,14.629,14.629C131.292,424.506,124.743,431.056,116.663,431.056z"
                fill="#AB47BC"
            />
            <Path
                d="M493.349,431.056h-98.012c-8.079,0-14.629-6.551-14.629-14.629c0-8.078,6.549-14.629,14.629-14.629 h98.012c8.079,0,14.629,6.551,14.629,14.629C507.977,424.506,501.426,431.056,493.349,431.056z"
                fill="#AB47BC"
            />
        </Svg>
    ),
    Home = props => (
        <Svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            fill="none"
        >
            <Path
                d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                stroke={props.fill || "#000"}
                strokeWidth={1.5}
                strokeLinecap="round"
            />
            <Path
                d="M15 18H9"
                stroke={props.fill || "#000"}
                strokeWidth={1.5}
                strokeLinecap="round"
            />
        </Svg>
    ),
    Add = props => (
        <Svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <Path
                d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </Svg>
    ),
    ImageIcon = props => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" {...props}>
            <Path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            <Path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
        </Svg>
    );
},
CloseIcon = props => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" {...props}>
        <Path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
    </Svg>
),HDots = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" {...props}>
        <Path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
    </Svg>
),HeartIcon = (props) => (
    <Svg
        viewBox="0 0 24 24"
        fill={props.fill || "none"}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
            stroke={props.fill || "#000000"}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
    ),Forward = (props) => (
    <Svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M19.5 12L14.5 7M19.5 12L14.5 17M19.5 12L13 12M9.5 12C7.83333 12 4.5 13 4.5 17"
            stroke="#1C274C"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
), CommentIcon = (props) => (
    <Svg
        viewBox="-7 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M7.28 24.2c-1.12 0-1.72-1.12-2.2-2-0.2-0.32-0.48-0.92-0.64-1-0.12-0.040-0.32-0.080-0.56-0.080-0.68-0.040-1.68-0.16-2.56-1.44-0.8-1.12-1.68-4.16-1.2-6.84 0.28-1.64 1.040-2.88 2.16-3.64 1.8-1.24 5.080-1.4 6.4-1.4 2.36 0 5.64 0.4 7 1.56 1.36 1.12 1.96 4.040 1.84 6.32-0.080 2.080-0.72 3.64-1.76 4.36-0.64 0.44-1.56 0.68-3 0.68-0.6 0-1.16-0.040-1.76-0.080-0.52-0.040-1-0.040-1.44-0.040-0.8 0-1 0.12-1.040 0.12-0.040 0.12 0.040 0.64 0.12 0.88 0.16 0.68 0.44 2.16-0.96 2.52-0.12 0.040-0.24 0.080-0.4 0.080zM8.68 9.48c-2.44 0-4.48 0.4-5.44 1.080-0.76 0.52-1.24 1.36-1.44 2.52-0.4 2.12 0.28 4.72 0.88 5.6 0.48 0.64 0.8 0.68 1.36 0.72 0.32 0.040 0.68 0.040 1.040 0.2 0.68 0.28 1.12 1.040 1.52 1.76 0.12 0.24 0.36 0.64 0.52 0.88-0.040-0.12-0.040-0.24-0.080-0.32-0.16-0.72-0.4-1.84 0.48-2.56 0.52-0.44 1.36-0.48 2.080-0.48 0.48 0 0.96 0.040 1.52 0.040 0.56 0.040 1.12 0.080 1.64 0.080 1 0 1.68-0.12 2.040-0.36 0.6-0.4 1-1.56 1.040-3.080 0.080-2.28-0.56-4.4-1.24-4.96-0.68-0.52-3-1.12-5.92-1.12z"
        />
    </Svg>
),
Clock = (props) => (
    <Svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        fill={"none"}
    >
        <Path
            d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke={props.fill || "currentColor"}
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
),
Plus = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill={props.fill || "currentColor"} {...props}>
        <Path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
    </Svg>
),
Send = (props) => (
    <Svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.455 9.8834L7.063 4.1434C6.76535 3.96928 6.40109 3.95274 6.08888 4.09916C5.77667 4.24558 5.55647 4.53621 5.5 4.8764C5.5039 4.98942 5.53114 5.10041 5.58 5.2024L7.749 10.4424C7.85786 10.7903 7.91711 11.1519 7.925 11.5164C7.91714 11.8809 7.85789 12.2425 7.749 12.5904L5.58 17.8304C5.53114 17.9324 5.5039 18.0434 5.5 18.1564C5.55687 18.4961 5.77703 18.7862 6.0889 18.9323C6.40078 19.0785 6.76456 19.062 7.062 18.8884L18.455 13.1484C19.0903 12.8533 19.4967 12.2164 19.4967 11.5159C19.4967 10.8154 19.0903 10.1785 18.455 9.8834V9.8834Z"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
),
Power = (props) => (
    <Svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4"
            stroke={props.fill || "#000"}
            strokeWidth={1.5}
            strokeLinecap="round"
        />
        <Path
            d="M10 12H20M20 12L17 9M20 12L17 15"
            stroke={props.fill || "#000"}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
),
    Cog = (props) => (
        <Svg
            width={103}
            height={103}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"

            {...props}
            fill="none"
        >
            <Path
                stroke={props.fill || "#000"}
                strokeWidth={2}
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <Path
                stroke={props.fill || "#000"}
                strokeWidth={2}
                strokeLinejoin="round"
                d="M10.47 4.32c.602-1.306 2.458-1.306 3.06 0l.218.473a1.684 1.684 0 0 0 2.112.875l.49-.18c1.348-.498 2.66.814 2.162 2.163l-.18.489a1.684 1.684 0 0 0 .875 2.112l.474.218c1.305.602 1.305 2.458 0 3.06l-.474.218a1.684 1.684 0 0 0-.875 2.112l.18.49c.498 1.348-.814 2.66-2.163 2.162l-.489-.18a1.684 1.684 0 0 0-2.112.875l-.218.473c-.602 1.306-2.458 1.306-3.06 0l-.218-.473a1.684 1.684 0 0 0-2.112-.875l-.49.18c-1.348.498-2.66-.814-2.163-2.163l.181-.489a1.684 1.684 0 0 0-.875-2.112l-.474-.218c-1.305-.602-1.305-2.458 0-3.06l.474-.218a1.684 1.684 0 0 0 .875-2.112l-.18-.49c-.498-1.348.814-2.66 2.163-2.163l.489.181a1.684 1.684 0 0 0 2.112-.875l.218-.474Z"
            />
        </Svg>
    ),
Camera = (props) => (
    <Svg
        viewBox="0 0 24 24"

        xmlns="http://www.w3.org/2000/svg"
        {...props}
        fill="none"
    >
        <Circle
            cx={12}
            cy={13}
            r={3}
            stroke={props.fill || "#000"}
            strokeWidth={1.5}
        />
        <Path
            d="M3.0001 12.9999C3.0001 10.191 2.99995 8.78673 3.67407 7.77783C3.96591 7.34107 4.34091 6.96607 4.77767 6.67423C5.78656 6.00011 7.19103 6.00011 9.99995 6.00011H14C16.8089 6.00011 18.2133 6.00011 19.2222 6.67423C19.659 6.96607 20.034 7.34107 20.3258 7.77783C21 8.78673 21.0001 10.191 21.0001 12.9999C21.0001 15.8088 21.0001 17.2133 20.326 18.2222C20.0341 18.6589 19.6591 19.0339 19.2224 19.3258C18.2135 19.9999 16.809 19.9999 14.0001 19.9999H10.0001C7.19117 19.9999 5.78671 19.9999 4.77782 19.3258C4.34106 19.0339 3.96605 18.6589 3.67422 18.2222C3.44239 17.8752 3.29028 17.4815 3.19049 16.9999"
            stroke={props.fill || "#000"}
            strokeWidth={1.5}
            strokeLinecap="round"
        />
        <Path
            d="M18 10H17.5"
            stroke={props.fill || "#000"}
            strokeWidth={1.5}
            strokeLinecap="round"
        />
        <Path
            d="M14.5 3.5H9.5"
            stroke={props.fill || "#000"}
            strokeWidth={1.5}
            strokeLinecap="round"
        />
    </Svg>
), Search = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"

        viewBox="0 0 16 16"
        {...props}
        fill={props.fill || "#000"}
    >
        <Path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
    </Svg>
),
    Messenger = (props) => (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            {...props}

            fill={props.fill || "#000"}
        >
            <Path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
        </Svg>
    ),
    Bar = (props) => (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            {...props}
            fill={props.fill || "#000"}
        >
            <Path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
        </Svg>
    ),Bell = (props) => (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            {...props}
            fill={props.fill || "#000"}
        >
            <Path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
        </Svg>
    );


const icons = {
    logo: Logo,
    home:Home,
    add:Add,
    image:ImageIcon,
    close:CloseIcon,
    h_dots:HDots,
    heart:HeartIcon,
    forward:Forward,
    comment:CommentIcon,
    clock:Clock,
    plus:Plus,
    send:Send,
    power:Power,
    cog:Cog,
    camera:Camera,
    search:Search,
    chat:Messenger,
    bars:Bar,
    bell:Bell
}
const Icon = ({name = "", ...props}) => {
    let IconItem = icons[name];
    return (
        <IconItem
            height={props.size || 24}
            width={props.size || 24}
            fill={props.color || "#fff"}
            {...props}
        />
    )
};

export default Icon;
