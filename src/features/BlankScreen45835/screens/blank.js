import React from "react"
import { View } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input
} from "react-native-ui-kitten"

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  }

  state = { Toggle_22: true }

  render = () => (
    <View
      editableName="View1"
      style={{
        overflow: "visible",
        textAlign: "left",
        verticalAlign: "baseline",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderStyle: "solid",
        backgroundSize: "auto"
      }}
    >
      <View
        editableName="View2"
        style={{
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "stretch",
          borderStyle: "solid",
          backgroundSize: "auto"
        }}
      >
        <View
          editableName="View3"
          style={{
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <View
            editableName="View5"
            style={{
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "stretch",
              alignContent: "stretch",
              borderStyle: "solid",
              backgroundSize: "auto"
            }}
          >
            <View
              editableName="View6"
              style={{
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "stretch",
                alignContent: "stretch",
                borderStyle: "solid",
                backgroundSize: "auto"
              }}
            >
              <Text
                editableName="Text12"
                style={{
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  borderStyle: "solid"
                }}
              >
                Name
              </Text>
              <Text
                editableName="Text13"
                style={{
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  borderStyle: "solid"
                }}
              >
                Email
              </Text>
              <Text
                editableName="Text14"
                style={{
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  borderStyle: "solid"
                }}
              >
                Subscribe?
              </Text>
            </View>
            <View
              editableName="View7"
              style={{
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "stretch",
                alignContent: "stretch",
                borderStyle: "solid",
                backgroundSize: "auto"
              }}
            >
              <Text
                input
                placeholder="Text input placeholder"
                editable={true}
                value=""
                editableName="InputName"
                style={{
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  borderStyle: "solid"
                }}
              />
              <Text
                input
                placeholder="Text input placeholder"
                editable={true}
                value=""
                editableName="InputEmail"
                style={{
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  borderStyle: "solid"
                }}
              />
              <Toggle
                activeColor=""
                inactiveColor=""
                disabled={false}
                text=""
                editableName="ToggleSubmit"
                style={{
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  borderStyle: "solid"
                }}
                checked={this.state.Toggle_22}
                onChange={nextChecked =>
                  this.setState({ Toggle_22: nextChecked })
                }
              />
            </View>
          </View>
        </View>
        <View
          editableName="View4"
          style={{
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Button
            editableName="Button11"
            style={{
              overflow: "visible",
              textAlign: "center",
              verticalAlign: "baseline",
              borderStyle: "solid",
              backgroundColor: "#ff9300"
            }}
            onPress={() => alert("Pressed!")}
          >
            Button
          </Button>
        </View>
      </View>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
