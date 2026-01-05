# react-native-simple-api

A **minimal, explicit API state hook** for React Native apps, built on top of **Jotai**.

Designed for teams that want:

- Full control
- Clear async flow
- Zero hidden magic

> Think of it as the **80% solution** without React Query’s mental overhead.

---

## ✨ Features

- ✅ Handles `loading`, `error`, `success`
- ✅ Explicit `refetch`
- ✅ Supports request parameters
- ✅ No caching, no background refetch, no surprises
- ✅ Tiny bundle size
- ✅ Easy to understand & debug

---

## 📦 Installation

```bash
npm install react-native-simple-api jotai
```

## 🚀 Basic Usage

import { useApi } from 'react-native-simple-api';

const fetchUsers = async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/users');
return res.json();
};

export function UsersScreen() {
const { data, loading, error, refetch } = useApi(fetchUsers);

if (loading) return null;
if (error) return null;

return null;
}
