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
    
  },
  divider: {
    borderBottomWidth: 1,
    marginTop: 30
  },
  todosContainer: {
    marginTop: 30
  },
  todoBox: {
    borderBottomWidth: 1,
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  todoText: {
    fontSize: 25
  },
  deleteBtn: {
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold'
  }
})