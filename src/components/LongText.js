import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    LayoutAnimation,
    NativeModules
} from 'react-native';

// ANDROID CONFIGURATION...
NativeModules.UIManager.setLayoutAnimationEnabledExperimental && NativeModules.UIManager.setLayoutAnimationEnabledExperimental(true);

export default class LongText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollapsed: true
        };
    }

    componentWillUpdate(nextProps, nextState){
        LayoutAnimation.spring();
    }

    toggleIsExpanded = () => {
        const { isCollapsed } = this.state;
        this.setState({
            isCollapsed: !isCollapsed
        });
    }

    render() {
        const { label = '', content = '' } = this.props;
        const { isCollapsed } = this.state;
        return (
            <View
                style={styles.line}
            >
                <Text style={[
                    styles.cell,
                    styles.label
                ]}>{label}</Text>
                <TouchableWithoutFeedback onPress={this.toggleIsExpanded}>
                    <View>
                        <Text
                            style={[
                                styles.cell,
                                styles.content,
                                isCollapsed ? styles.collapsed : styles.expanded
                            ]}
                        >
                            {content}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View >

        );
    }
}

const styles = StyleSheet.create({
    line: {
        paddingTop: 3,
        paddingBottom: 3
    },
    cell: {
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        // borderWidth: 1
    },
    label: {
        fontWeight: 'bold',
        flex: 1,
        textDecorationLine: 'underline',
        paddingBottom: 6
    },
    content: {
        flex: 3,
        textAlign: 'justify' //IOS
    },
    collapsed: {
        maxHeight: 65
    },
    expanded: {
        flex: 1
    }
});