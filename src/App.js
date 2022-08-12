import styles from "./App.module.css";
import InputForm from "./components/form/InputForm";
import Header from "./components/header/Header";
import Card from "./components/wrapper/Card";

function App() {
  return (
    <div className={styles.App}>
      <Card>
        <Header title="Создание анкеты" />
        <InputForm />
      </Card>
    </div>
  );
}

export default App;
