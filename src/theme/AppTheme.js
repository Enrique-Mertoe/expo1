// src/commonStyles.js
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    layout: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 48,
    },
    input: {
        display: "flex",
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal: 12,
        fontSize: 24,
        fontWeight: "400",
        lineHeight: 24,
        borderWidth: 2,
        borderColor: "#BA68C8",
        borderRadius: 15,
        minHeight: 50,
    },
    button: {
        backgroundColor: '#BA68C8',
        color: '#fff',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 15,
        textAlign: 'center',
        lineHeight: 24,
        fontSize: 16,
        verticalAlign: "middle"
    },
    vStack: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch'
    },
    hStack: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch",
    },
    gap1: {
        gap: 4,
    },
    gap2: {
        gap: 8
    },
    gap3: {
        gap: 16
    },
    gap4: {
        gap: 24,
    },
    gap5: {
        gap: 48,
    },
    mxAuto: {
        marginHorizontal: "auto"
    },
    mtAuto: {
        marginTop: "auto"
    },
    centerVertivcal: {
        justifyContent: "center"
    },
    centerHorizontal: {
        alignItems: "center"
    },
    heading: {
        marginTop: 0,
        fontWeight: '500',
        lineHeight: 24,
        color: '#000000',
    },
    h1: {
        fontSize: 32,
    },
    h2: {
        fontSize: 28,
    },
    h3: {
        fontSize: 24,
    },
    h4: {
        fontSize: 20,
    },
    h5: {
        fontSize: 18,
    },
    h6: {
        fontSize: 16,
    },
    px1: {paddingHorizontal: 8},
    py1: {paddingVertical: 8},
    py2: {paddingVertical: 16},
    px2: {paddingHorizontal: 16},
    borderBottom: {
        borderBottomColor:"rgba(0,0,0,0.1)",
        borderBottomWidth:1,
    },
    weight1:{
        flex: 1,
        alignSelf: 'stretch'
    },
    imgPreview:{
        width:"100%",
        height:"100%",
        maxWidth:"100%",
        marginHorizontal:"auto",
        resizeMode:"cover",
        borderRadius:5,
        maxHeight:200,
        borderWidth:1,
        borderColor:"rgba(0,0,0,.2)"
    },
    textMuted:{
        color:"rgba(0,0,0,0.5)"
    },
    border1:{
        borderWidth:1,
        borderColor:"rgba(0,0,0,0.1)"
    },
    avatarIcon:{
        position:"absolute",
        bottom:0,
        right:0
    },
    bgMain:{
        backgroundColor:"#FCE4EC"
    },
    main:{
        color:"#BA68C8"
    },
    viewPager:{
        position:"relative",
        height:"100%",
        width:"100%",
        display:"flex",
        flexDirection:"row",
        flex:1,
    },
    viewPagerItem:{
        position:"absolute",
        flexDirection:"column",
        flex:1,
        height:"100%",
        width:"100%",
        opacity:0,
        display:"none"
    },
    viewPagerItemActive:{
        position:"relative",
        opacity:1,
        display:"flex"
    }

});

export default style;
