import { IconHistory, IconLogout, IconShare, IconTheme } from "../../../../../assets";

export const listNavigationDown = [
    {
        name: 'Theme',
        desc: 'Change the theme and appearance of the application.',
        deskripsi: 'Ubah tema dan tampilan aplikasi.',
        icon: <IconTheme/>,
        path: '/theme',
    },
    {
        name: 'Share',
        desc: 'Share the application or its content with others.',
        deskripsi: 'Bagikan aplikasi atau kontennya dengan orang lain.',
        icon: <IconShare/>,
        path: '/share',
    },
    {
        name: 'History',
        desc: 'View the history of your actions and calculations.',
        deskripsi: 'Lihat riwayat tindakan dan perhitungan Anda.',
        icon: <IconHistory/>,
        path: '/history',
    },
    {
        name: 'Logout',
        desc: 'Log out and securely exit the application.',
        deskripsi: 'Logout dan keluar dari aplikasi dengan aman.',
        icon: <IconLogout/>,
        path: '/logout',
    },
];
