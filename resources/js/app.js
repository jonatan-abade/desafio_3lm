import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "tailwindcss/tailwind.css"
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init({
    delay: 250,
    color: '#29d',
    includeCSS: true,
    showSpinner: true,
})

createInertiaApp({
    resolve: name => import(`./Pages/${name}`),
    setup({ el, App, props }) {
        render(<App {...props} />, el)
    },
})