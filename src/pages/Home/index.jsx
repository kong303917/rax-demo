import { createElement, useState, useEffect } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import styles from './index.css';

import Logo from '../../components/Logo';

export default function Home() {
  const [account, setAccount] = useState('');

  useEffect(() => {
    fetch(`${__FAAS_API__}/user`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setAccount(data.account);
      });
  }, []);

  return (
    <View style={styles.home}>
      <Logo />
      <Text style={styles.title}>Welcome to Your Rax App</Text>
      <Text style={styles.info}>Current user: {account}</Text>
      <Text style={styles.info}>More information about Rax</Text>
      <Text style={styles.info}>Visit https://rax.js.org</Text>
    </View>
  );
}
