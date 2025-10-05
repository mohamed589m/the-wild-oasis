# The Wild Oasis Hotel Management App
 
Welcome to **The Wild Oasis**, a hotel management application designed for hotel employees to efficiently manage cabins, bookings, and guests. This app leverages **Supabase** for the backend and utilizes advanced React techniques such as **Higher-Order Components (HOCs)** and **React Query** for state management and data fetching.
  
## Key Features 📝

### Authentication and Authorization

- User authentication ensures only hotel employees can access the system.
- Employees can manage their profiles, including uploading avatars and changing passwords.
- New users can only sign up from within the app to restrict access to actual hotel employees.

### Dashboard

- Displays key information like recent bookings, check-ins, sales, and occupancy rate.
- Statistics for the last 7, 30, or 90 days.
- Quick check-in/check-out actions directly from the dashboard.
- Charts showing hotel sales and stay duration statistics.

### Cabins Management

- View all cabins in a table with details like cabin name, capacity, price, and discounts.
- Create, update, or delete cabin records, including the ability to upload cabin photos.

### Booking Management

- Table view of bookings with details such as dates, status, paid amount, and guest data.
- Filter bookings by status: "unconfirmed," "checked in," or "checked out."
- Manage booking details, including check-in/check-out actions, payment confirmations, and adding breakfast options.

### Guests Management

- View guest data with information like name, email, national ID, nationality, and a country flag for easy identification.

### Real-Time Updates

- Real-time updates for cabin and booking data powered by Supabase.

### Dark Mode

- Fully functional dark mode for a more personalized user experience.

### Data Visualization

- Charts displaying hotel sales, occupancy rates, and stay duration using **Recharts**.

### Settings

- Define settings such as breakfast price, min/max nights per booking, and max guests per booking.

## Technologies Used 🛠️

- **React**: Frontend framework.
- **Supabase**: Backend database and real-time data.
- **React Query**: Efficient data fetching and caching.
- **React Router**: Navigation.
- **React Hook Form**: Form handling.
- **Recharts**: Data visualization.
- **Styled Components**: For dynamic theming and dark mode.
- **Vite**: Fast development environment and build system.

## What I Learned 💡

- **Authentication & Authorization**: Managing user roles and permissions using Supabase.
- **Real-time Functionality**: Integrating real-time updates using Supabase.
- **State Management**: Efficient data handling with React Query.
- **Advanced UI Patterns**: Implementing complex UI patterns like Compound Components and HOCs for reusable components.
- **Responsive Design**: Ensuring a mobile-first design with Styled Components.
- **Dark Mode**: Adding dark mode functionality to improve user experience.
- **Data Visualization**: Creating meaningful and interactive visual representations of hotel statistics using Recharts.

