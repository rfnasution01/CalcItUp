import { IconCalculator, IconFinCal, IconLike, IconMath, IconScimode, IconSolver, IconUnit } from "../../../../../assets";

export const listNavigationUp = [
    {
        name: 'MathOps',
        desc: 'Perform various mathematical operations and calculations.',
        deskripsi: 'Melakukan berbagai operasi matematika dan perhitungan.',
        icon: <IconCalculator/>,
        path: '/mathops',
        subMenu: [
            {
               name: 'Mathulator',
               desc: 'Standard math operations calculator.',
               deskripsi: 'Kalkulator untuk operasi matematika yang biasa digunakan.',
               path: '/mathops/mathulator'
            },
            {
               name: 'NumCheck',
               desc: 'Check number properties like odd, even, prime, and more.',
               deskripsi: 'Memeriksa sifat-sifat nomor seperti ganjil, genap, bilangan prima, dan lainnya.',
               path: '/mathops/check'
            },
            {
                name: 'UniqMath',
                desc: 'Perform unique mathematical operations like Fibonacci and factorial.',
                deskripsi: 'Melakukan operasi matematika unik seperti angka Fibonacci dan faktorial.',
                path: '/mathops/uniq'
            },
            {
                name: 'Geometry',
                desc: 'Calculate area, perimeter, and volume of 2D and 3D shapes.',
                deskripsi: 'Menghitung luas, keliling, dan volume bangun datar dan bangun ruang.',
                path: '/mathops/geometry'
            },
            {
                name: 'NumConv',
                desc: 'Convert numbers between different formats and number systems.',
                deskripsi: 'Mengkonversi angka antara format dan sistem bilangan yang berbeda.',
                path: '/mathops/convert'
            },
        ]
    },
    {
        name: 'Scimode',
        desc: 'Switch to scientific mode for advanced scientific calculations.',
        deskripsi: 'Beralih ke mode ilmiah untuk perhitungan ilmiah tingkat lanjut.',
        icon: <IconScimode/>,
        path: '/scimode',
        subMenu: [
            {
                name: 'Conversion',
                desc: 'Convert values from one number system to another',
                deskripsi: 'Mengubah nilai dari satu sistem bilangan ke sistem bilangan lain.',
                path: '/scimode/conversion'
            },
            {
                name: 'ComplexNums',
                desc: 'Perform arithmetic operations with complex numbers.',
                deskripsi: 'Melakukan operasi aritmatika pada bilangan kompleks.',
                path: '/scimode/complex-number'
            },
            {
                name: 'MatrixOps',
                desc: 'Add, subtract, or multiply matrices.',
                deskripsi: 'Menambah, mengurangi, atau mengalikan matriks.',
                path: '/scimode/matrix'
            },
            {
                name: 'AngleConv',
                desc: 'Convert angle values between different units.',
                deskripsi: 'Mengubah nilai sudut dari satu satuan ke satuan sudut lainnya.',
                path: '/scimode/angle'
            },
            {
                name: 'Statistics',
                desc: 'Calculate statistical values such as mean, median, and standard deviation.',
                deskripsi: 'Menghitung nilai-nilai statistik seperti rata-rata, median, dan standar deviasi.',
                path: '/scimode/statistic'
            },
        ]
    },
    {
        name: 'Equation',
        desc: 'Solve equations and find solutions to mathematical problems.',
        deskripsi: 'Memecahkan persamaan dan menemukan solusi untuk masalah matematika.',
        icon: <IconSolver />,
        path: '/equation',
        subMenu: [
            {
                name: 'Linear',
                desc: ' Solve linear equations with one variable.',
                deskripsi: 'Menyelesaikan persamaan linear dengan satu variabel.',
                path: '/equation/linear'
            },
            {
                name: 'Quadratic',
                desc: 'Solve quadratic equations with one variable.',
                deskripsi: 'Menyelesaikan persamaan kuadrat dengan satu variabel.',
                path: '/equation/quadratic'
            },
            {
                name: 'Systems',
                desc: 'Solve systems of linear equations with multiple variables.',
                deskripsi: 'Menyelesaikan sistem persamaan linear dengan beberapa variabel.',
                path: '/equation/systems'
            },
            {
                name: 'Exponential',
                desc: 'Solve exponential equations.',
                deskripsi: 'Menyelesaikan persamaan eksponensial.',
                path: '/equation/exponential'
            },
            {
                name: 'Trigonometric',
                desc: 'Solve equations involving trigonometric functions.',
                deskripsi: 'Menyelesaikan persamaan yang melibatkan fungsi trigonometri.',
                path: '/equation/trigonometri'
            }
        ]
    },
    {
        name: 'UnitConv',
        desc: 'Convert units between different systems of measurement.',
        deskripsi: 'Mengkonversi satuan antara sistem pengukuran yang berbeda.',
        icon: <IconUnit/>,
        path: '/unit',
        subMenu: [
            {
                name: 'Length',
                desc: ' Convert length units such as meters, kilometers, inches, and feet.',
                deskripsi: 'Mengkonversi satuan panjang seperti meter, kilometer, inci, dan kaki.',
                path: '/unit/length'
            },
            {
                name: 'Weight',
                desc: 'Convert weight units such as grams, kilograms, pounds, and ounces.',
                deskripsi: 'Mengkonversi satuan berat seperti gram, kilogram, pon, dan ons.',
                path: '/unit/weight'
            },
            {
                name: 'Time',
                desc: 'Convert time units such as seconds, minutes, hours, and days.',
                deskripsi: 'Mengkonversi satuan waktu seperti detik, menit, jam, dan hari.',
                path: '/unit/time'
            },
            {
                name: 'Temperature',
                desc: 'Convert temperature in Celsius, Fahrenheit, and Kelvin.',
                deskripsi: 'Mengkonversi suhu dalam satuan Celsius, Fahrenheit, dan Kelvin.',
                path: '/unit/temperature'
            },
            {
                name: 'Speed',
                desc: 'Convert speed units such as meters/second, kilometers/hour, and miles/hour.',
                deskripsi: 'Mengkonversi kecepatan dalam satuan meter/detik, kilometer/jam, dan mil/jam.',
                path: '/unit/speed'
            }
        ]
    },
    {
        name: 'FinCalc',
        desc: 'Calculate financial metrics and perform financial analysis.',
        deskripsi: 'Hitung metrik keuangan dan lakukan analisis keuangan.',
        icon: <IconFinCal/>,
        path: '/fincal',
        subMenu: [
            {
                name: 'Loan',
                desc: 'Calculate loan installments and loan-related information',
                deskripsi: 'Menghitung angsuran dan informasi kredit.',
                path: '/fincal/loan'
            },
            {
                name: 'Savings',
                desc: 'Calculate savings interest based on the principal and interest rate.',
                deskripsi: 'Menghitung bunga tabungan dari jumlah dan tingkat bunga tertentu.',
                path: '/fincal/savings'
            },
            {
                name: 'Investment',
                desc: 'Calculate potential investment returns and ROI.',
                deskripsi: 'Menghitung potensi hasil investasi dan ROI.',
                path: '/fincal/investment'
            },
            {
                name: 'Finance',
                desc: 'Budget planning and financial management.',
                deskripsi: 'Merencanakan anggaran dan perencanaan keuangan.',
                path: '/fincal/finance'
            },
            {
                name: 'Tax',
                desc: 'Calculate taxes and deductions based on applicable regulations.',
                deskripsi: 'Menghitung pajak dan potongan gaji berdasarkan peraturan yang berlaku.',
                path: '/fincal/tax'
            },
        ]
    },
    {
        name: 'Solver',
        desc: 'Use the solver to find solutions for mathematical equations and systems.',
        deskripsi: 'Gunakan pemecah untuk menemukan solusi persamaan dan sistem matematika.',
        icon: <IconMath/>,
        path: '/solver',
        subMenu: [
            {
                name: 'Nonlinear',
                desc: ' Solve nonlinear equations and systems of equations.',
                deskripsi: 'Menyelesaikan persamaan dan sistem persamaan nonlinear.',
                path: '/solver/non-linear',
            },
            {
                name: 'FuncRoots',
                desc: 'Find roots or solutions of mathematical functions.',
                deskripsi: 'Mencari akar atau solusi dari fungsi matematika.',
                path: '/solver/functional-roots',
            },
            {
                name: 'Optimization',
                desc: 'Find the maximum or minimum value of a function.',
                deskripsi: 'Mencari nilai maksimum atau minimum suatu fungsi.',
                path: '/solver/optimization',
            },
            {
                name: 'Linear',
                desc: 'Solve linear programming problems.',
                deskripsi: 'Menyelesaikan masalah pemrograman linear.',
                path: '/solver/linear-programming',
            },
            {
                name: 'Differential',
                desc: 'Solve differential equations using numerical methods.',
                deskripsi: 'Menyelesaikan persamaan diferensial menggunakan metode numerik.',
                path: '/solver/differential',
            },
        ]
    },
    {
        name: 'HealthCal',
        desc: 'Perform health-related calculations and assessments.',
        deskripsi: 'Lakukan perhitungan dan penilaian terkait kesehatan',
        icon: <IconLike />,
        path: '/health',
        subMenu: [
            {
                name: 'BMI',
                desc: 'Calculate BMI based on weight and height.',
                deskripsi: 'Menghitung nilai BMI berdasarkan berat dan tinggi.',
                path: '/health/BMI'
            },
            {
                name: 'Calorie',
                desc: 'Calculate daily calorie needs based on activity and weight.',
                deskripsi: 'Menghitung kebutuhan kalori harian berdasarkan aktivitas dan berat badan.',
                path: '/health/calory'
            },
            {
                name: 'HeartRate',
                desc: 'Calculate optimal heart rate during exercise.',
                deskripsi: 'Menghitung detak jantung optimal saat berolahraga.',
                path: '/health/heart'
            },
            {
                name: 'BodyFat',
                desc: 'Predict body fat percentage based on specific information.',
                deskripsi: 'Memprediksi kadar lemak tubuh berdasarkan informasi tertentu.',
                path: '/health/body'
            },
            {
                name: 'Nutrition',
                desc: 'Calculate specific nutritional needs based on diet goals.',
                deskripsi: 'Menghitung kebutuhan nutrisi khusus berdasarkan tujuan diet.',
                path: '/health/nutrition'
            },
        ]
    },
];