import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  body: {
    margin: 16,
    flex: 1,
  },
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 20,
    marginTop: 4,
    color: '#666',
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 18,
    marginTop: 32,
  },
  addBtn: {
    backgroundColor: 'lightgreen',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    alignSelf: 'flex-end'
  },
  btnText: {
    fontSize: 18,
  }
})