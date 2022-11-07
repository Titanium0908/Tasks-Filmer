import { View, Switch } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../../features/counter/themeSlice';
import refreshState from '../../../themes/colors'

export default function Swither() {
    const dispatch = useDispatch()
    const isDark = useSelector(state => state.theme.isDark)

    const changeTheme = () => {
        dispatch(setTheme())
        refreshState()
    }

    return (
      <View>
        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDark ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={() => changeTheme()}
            value={isDark}
            />
      </View>
    );
  };
