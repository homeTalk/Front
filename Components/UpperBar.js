import { StyleSheet, Image, View, Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';  

export default function UpperBar() {
  return (
      <View style={styles.upperBar}> 
        <View style={styles.profileBox}>
            <Image source={require('../assets/은상.png')} style={styles.profileImg}/>
        </View>
        <View style={styles.buttonArea}>
            <Pressable>
                <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path clipRule="evenodd" d="M19.027 6.055c0-1.135-.92-2.055-2.055-2.055h-1.944c-1.135 0-2.055.92-2.055 2.055 0 .873-.564 1.63-1.331 2.047-.12.065-.238.133-.355.203-.753.454-1.697.563-2.46.127a2.09 2.09 0 0 0-2.843.761l-.94 1.613a2.059 2.059 0 0 0 .757 2.822c.76.435 1.138 1.304 1.12 2.18a9.104 9.104 0 0 0 0 .384c.018.876-.36 1.745-1.12 2.18a2.058 2.058 0 0 0-.757 2.822l.94 1.613a2.09 2.09 0 0 0 2.843.762c.763-.437 1.707-.328 2.46.126.117.07.235.138.355.203.767.416 1.33 1.174 1.33 2.047 0 1.135.92 2.055 2.056 2.055h1.944c1.135 0 2.055-.92 2.055-2.055 0-.873.564-1.63 1.331-2.047.12-.065.238-.133.355-.203.753-.454 1.697-.563 2.46-.127a2.09 2.09 0 0 0 2.843-.761l.94-1.613a2.058 2.058 0 0 0-.757-2.822c-.76-.435-1.138-1.304-1.12-2.18a8.795 8.795 0 0 0 0-.384c-.018-.876.36-1.745 1.12-2.18a2.058 2.058 0 0 0 .757-2.822l-.94-1.613a2.09 2.09 0 0 0-2.843-.761c-.763.436-1.707.327-2.46-.127a9.135 9.135 0 0 0-.355-.203c-.767-.417-1.33-1.174-1.33-2.047z" stroke="#7E7E7E" strokeWidth="2"/>
                </Svg>
            </Pressable>
            <Pressable>
                <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path clipRule="evenodd" d="M16 4c-4.74 0-7.111 3.343-7.111 7.467v2.31c0 1.474-1.325 2.69-2.388 3.71-.684.657-1.168 1.589-1.168 2.69 0 1.375 1.062 2.49 2.37 2.49h16.593c1.31 0 2.37-1.115 2.37-2.49 0-1.101-.483-2.033-1.167-2.69-1.063-1.02-2.388-2.236-2.388-3.71v-2.31C23.111 7.343 20.741 4 16 4z" stroke="#7E7E7E" strokeWidth="2"/>
                    <Path d="M18.667 26.667c-.271.404-.66.74-1.128.972a3.46 3.46 0 0 1-1.539.356 3.46 3.46 0 0 1-1.539-.356 2.913 2.913 0 0 1-1.128-.972" stroke="#7E7E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </Svg>
            </Pressable>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  upperBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '10%',
  },
  profileBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '9.5%',
    width: 56,
    height: 56,
    borderRadius: 100,
    overflow: 'hidden'
  },
  profileImg:{
    width: '100%',
    height: '100%'
  },
  buttonArea:{
    flexDirection: 'row',
    width: '21%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center', 
    marginRight: '5%',
  }
});
