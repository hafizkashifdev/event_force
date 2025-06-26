import { Chip } from '@mui/material';
import Marketing from '@assets/icons/marketing';
import { Color } from '../../enems/color';

export const pricingData = [
    {
        id: '1',
        title: 'Marketing',
        desc: 'Access powerful tools like email, WhatsApp, SMS broadcasting, campaign management, and analytics – all under flexible pricing built for teams of any size',
        offers: [
            {
                id: 1,
                free: "Free",
                price: '€0',
                perMonth: '/month',
                subheading: 'Features:',
                subPricingData: [
                    {
                        user: '1 User',
                    },
                    {
                        user: '5GB Bandwidth',
                    },
                    {
                        user: 'Whitelabelling',
                    },
                    {
                        user: 'Limited Support',
                    },
                ],
                button: 'Select Now'
            },
            {
                id: 2,
                free: "Growth",
                price: '€29',
                perMonth: '/month',
                subheading: 'Features:',
                subPricingData: [
                    {
                        user: '10 User',
                    },
                    {
                        user: 'Unlimited Bandwidth',
                    },
                    {
                        user: 'Whitelabelling',
                    },
                    {
                        user: 'Limited Support',
                    },
                    {
                        user: 'File Uploader',
                    },
                ],
                button: 'Selected'
            },
            {
                id: 3,
                free: "Premium",
                price: '€59',
                perMonth: '/month',
                subheading: 'Features:',
                subPricingData: [
                    {
                        user: '50 Users',
                    },
                    {
                        user: 'Unlimited Bandwidth',
                    },
                    {
                        user: 'Whitelabelling',
                    },
                    {
                        user: '24/7 Hours Support',
                    },
                    {
                        user: 'File Uploader',
                    },
                    {
                        user: 'Analytics Dashboard',
                    },
                ],
                button: 'Select Now'
            },
            {
                id: 4,
                free: "Enterprise",
                price: '€99',
                perMonth: '/month',
                subheading: 'Features:',
                subPricingData: [
                    {
                        user: '50 Users',
                    },
                    {
                        user: 'Unlimited Bandwidth',
                    },
                    {
                        user: 'Whitelabelling',
                    },
                    {
                        user: '24/7 Hours Support',
                    },
                    {
                        user: 'File Uploader',
                    },
                    {
                        user: 'Analytics Dashboard',
                    },
                    {
                        user: 'Security Assistance',
                    },
                    {
                        user: 'Single Sign-On (SSO)',
                    },
                ],
                button: 'Select Now'
            },
        ]
    },
    {
        id: '2',
        title: 'Sales',
        desc: 'Unlock seamless deal management, pipeline visibility, and forecasting tools at flexible pricing – built to support startups and scale-ups alike.',
        offers: [
            {
                id: 5,
                free: "Free",
                price: '€0',
                perMonth: '/month',
                subheading: 'Features:',
                subPricingData: [
                    {
                        user: '1 User',
                    },
                    {
                        user: '5GB Bandwidth',
                    },
                    {
                        user: 'Whitelabelling',
                    },
                    {
                        user: 'Limited Support',
                    },
                ],
                button: 'Select Now',
                button1: 'Selected'
            },
            {
                id: 6,
                free: "Growth",
                price: '€29',
                perMonth: '/month',
                subheading: 'Features:',
                subPricingData: [
                    {
                        user: '10 User',
                    },
                    {
                        user: 'Unlimited Bandwidth',
                    },
                    {
                        user: 'Whitelabelling',
                    },
                    {
                        user: 'Limited Support',
                    },
                    {
                        user: 'File Uploader',
                    },
                ],

            },
            {
                id: 7,
                free: "Premium",
                price: '€59',
                perMonth: '/month',
                subheading: 'Features:',
                subPricingData: [
                    {
                        user: '50 Users',
                    },
                    {
                        user: 'Unlimited Bandwidth',
                    },
                    {
                        user: 'Whitelabelling',
                    },
                    {
                        user: '24/7 Hours Support',
                    },
                    {
                        user: 'File Uploader',
                    },
                    {
                        user: 'Analytics Dashboard',
                    },
                ],
            },
            {
                id: 8,
                free: "Enterprise",
                price: '€99',
                perMonth: '/month',
                subheading: 'Features:',
                subPricingData: [
                    {
                        user: '50 Users',
                    },
                    {
                        user: 'Unlimited Bandwidth',
                    },
                    {
                        user: 'Whitelabelling',
                    },
                    {
                        user: '24/7 Hours Support',
                    },
                    {
                        user: 'File Uploader',
                    },
                    {
                        user: 'Analytics Dashboard',
                    },
                    {
                        user: 'Security Assistance',
                    },
                    {
                        user: 'Single Sign-On (SSO)',
                    },
                ],
            },
        ]
    },
    {
        id: '3',
        title: 'Services',
        desc: 'Choose a plan that fits your service needs – from basic ticketing to advanced workload, knowledge base, and customer portals. Transparent pricing, no hidden costs.',
        offers: [
            {
                id: 9,
                free: "Free",
                price: '€0',
                perMonth: '/month',
                subheading: 'Features:',
                subPricingData: [
                    {
                        user: '1 User',
                    },
                    {
                        user: '5GB Bandwidth',
                    },
                    {
                        user: 'Whitelabelling',
                    },
                    {
                        user: 'Limited Support',
                    },
                ],
                button: 'Select Now'
            },
            {
                id: 10,
                free: "Growth",
                price: '€29',
                perMonth: '/month',
                subheading: 'Features:',
                subPricingData: [
                    {
                        user: '10 User',
                    },
                    {
                        user: 'Unlimited Bandwidth',
                    },
                    {
                        user: 'Whitelabelling',
                    },
                    {
                        user: 'Limited Support',
                    },
                    {
                        user: 'File Uploader',
                    },
                ],
                button: 'Selected'
            },
            {
                id: 11,
                free: "Premium",
                price: '€59',
                perMonth: '/month',
                subheading: 'Features:',
                subPricingData: [
                    {
                        user: '50 Users',
                    },
                    {
                        user: 'Unlimited Bandwidth',
                    },
                    {
                        user: 'Whitelabelling',
                    },
                    {
                        user: '24/7 Hours Support',
                    },
                    {
                        user: 'File Uploader',
                    },
                    {
                        user: 'Analytics Dashboard',
                    },
                ],
                button: 'Select Now'
            },
            {
                id: 12,
                free: "Enterprise",
                price: '€99',
                perMonth: '/month',
                subheading: 'Features:',
                subPricingData: [
                    {
                        user: '50 Users',
                    },
                    {
                        user: 'Unlimited Bandwidth',
                    },
                    {
                        user: 'Whitelabelling',
                    },
                    {
                        user: '24/7 Hours Support',
                    },
                    {
                        user: 'File Uploader',
                    },
                    {
                        user: 'Analytics Dashboard',
                    },
                    {
                        user: 'Security Assistance',
                    },
                    {
                        user: 'Single Sign-On (SSO)',
                    },
                ],
                button: 'Select Now'
            },
        ]
    }
]

export const billEstimateData = [
    {
        id: '1',
        title: 'Bill Estimate',
        desc: 'At Event Force, Deliver seamless, high-quality transport and logistics for events across Saudi Arabia, with a focus on professionalism, precision, and customer satisfaction',

        subEstimation: [
            {
                icon: <Marketing />,
                subTitle: 'Marketing',
                perMonth: 'Paid Monthly',
                chip: <Chip label="Growth" sx={{ backgroundColor: '#EBFAF8', color: Color.primaryMain }} />,
                planPrice: '£20',
                AdditionalUsers: '£45',
                AdditionalStorage: '£1',
                Discount: '-£10',
                Tax: '£27',
                total: '£650.88'
            },

            {
                icon: <Marketing />,
                subTitle: 'Sales',
                perMonth: 'Paid Monthly',
                chip: <Chip label="Growth" sx={{ backgroundColor: '#EBFAF8', color: Color.primaryMain }} />,
                planPrice: '£20',
                AdditionalUsers: '£45',
                AdditionalStorage: '£1',
                Discount: '-£10',
                Tax: '£27',
                total: '£650.88'
            },
            {
                icon: <Marketing />,
                subTitle: 'Services',
                perMonth: 'Paid Monthly',
                chip: <Chip label="Growth" sx={{ backgroundColor: '#EBFAF8', color: Color.primaryMain }} />,
                planPrice: '£20',
                AdditionalUsers: '£45',
                AdditionalStorage: '£1',
                Discount: '-£10',
                Tax: '£27',
                total: '£650.88'
            },
        ]
    }
]