# API Documentation - KKN Neira Basudara

Proyek web KKN Neira Basudara menyediakan beberapa API yang digunakan untuk berinteraksi dengan data di aplikasi ini. API tersebut dibuat menggunakan Next.js dan dapat diakses melalui berbagai endpoint yang disediakan.

## API Documentation

Dokumentasi lengkap tentang API yang ada dalam proyek ini dapat diakses melalui link Postman berikut:

[API Documentation on Postman](https://documenter.getpostman.com/view/22323395/2sA3s3GBA7)

Dokumentasi ini berisi penjelasan tentang setiap endpoint, metode HTTP yang digunakan, parameter yang diperlukan, dan contoh respons.

## Menggunakan API dengan Next.js

Berikut adalah contoh bagaimana cara menggunakan API yang ada di Next.js dengan metode client-side data fetching:

### Contoh: Client-side Data Fetching dengan `useEffect`

Misalkan Anda ingin mengambil data dari API di dalam Next.js pada halaman atau komponen. Anda dapat menggunakan `useEffect` dan `fetch` untuk melakukannya.

```jsx
import { useEffect, useState } from "react";

function ExampleComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mengambil data dari API
    fetch("/api/your-endpoint")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default ExampleComponent;
```
