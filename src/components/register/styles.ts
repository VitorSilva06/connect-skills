import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "#f2f2f7",
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 24,
    color: "#111",
  },
  form: {
    gap: 16,
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d1d6",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#111",
  },
  passwordContainer: {
    position: "relative",
    width: "100%",
  },
  showPasswordIcon: {
    position: "absolute",
    right: 12,
    top: 14,
    zIndex: 10,
  },
  button: {
    marginTop: 16,
    backgroundColor: "#007bff",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonDisabled: {
    backgroundColor: "#a0c4ff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
