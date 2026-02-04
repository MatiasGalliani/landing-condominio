"use client";

import { useEffect } from 'react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://creditplan.it';

export function StructuredData() {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "name": "AICondomini - Creditplan Italia Network di Mediazione Creditizia",
      "alternateName": "AICondomini",
      "url": siteUrl,
      "logo": `${siteUrl}/logo.png`,
      "description": "Servizi di mediazione creditizia specializzati per condomini. Finanziamenti per ristrutturazioni, efficienza energetica e manutenzione straordinaria.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IT",
        "addressLocality": "Italia"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "availableLanguage": ["Italian"]
      },
      "sameAs": [
        "https://creditplan.it"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "Italy"
      },
      "serviceType": "Mediazione Creditizia per Condomini",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "2000",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    // Product/Service Schema
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "FinancialProduct",
      "name": "Finanziamento Condominio",
      "description": "Finanziamenti per lavori condominiali: ristrutturazioni, efficienza energetica, cappotto termico, fotovoltaico. Erogazione diretta, zero garanzie personali, supporto completo.",
      "provider": {
        "@type": "FinancialService",
        "name": "AICondomini"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "price": "0",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "priceCurrency": "EUR",
          "price": "0",
          "priceType": "https://schema.org/ConsultationFee"
        },
        "availability": "https://schema.org/InStock",
        "url": siteUrl,
        "validFrom": "2025-01-01"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "2000"
      },
      "featureList": [
        "Erogazione diretta al condominio",
        "Zero garanzie personali",
        "Supporto in assemblea",
        "Specialisti eco-bonus",
        "Gestione completa burocrazia",
        "Piani fino a 10 anni"
      ]
    };

    // FAQPage Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quali tipi di lavori possono essere finanziati?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ristrutturazione facciate, tetti, installazione ascensori, cappotto termico e impianti fotovoltaici."
          }
        },
        {
          "@type": "Question",
          "name": "È necessaria la firma di tutti i condòmini?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, il finanziamento viene deliberato dall'assemblea e sottoscritto dall'amministratore pro-tempore."
          }
        },
        {
          "@type": "Question",
          "name": "Qual è la durata massima del finanziamento?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Offriamo piani flessibili che possono arrivare fino a 120 mesi (10 anni)."
          }
        },
        {
          "@type": "Question",
          "name": "Esistono costi anticipati?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, la consulenza preliminare è gratuita e non vincolante."
          }
        },
        {
          "@type": "Question",
          "name": "Come viene erogato il finanziamento?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Il finanziamento viene erogato direttamente al condominio, permettendo di iniziare i lavori immediatamente senza attendere la raccolta delle quote dai singoli condòmini."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto tempo serve per ottenere una risposta?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Valutiamo la fattibilità del progetto e la solvibilità del condominio in 48 ore."
          }
        }
      ]
    };

    // BreadcrumbList Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": siteUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Finanziamenti Condomini",
          "item": `${siteUrl}/finanziamenti-condomini`
        }
      ]
    };

    // WebPage Schema
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Finanziamenti per Condomini | Mediazione Creditizia | AICondomini",
      "description": "Soluzioni finanziarie per condomini: ristrutturazioni, efficienza energetica e manutenzione straordinaria. Mediazione creditizia specializzata con delibere veloci e supporto completo.",
      "url": siteUrl,
      "inLanguage": "it-IT",
      "isPartOf": {
        "@type": "WebSite",
        "name": "AICondomini",
        "url": siteUrl
      },
      "about": {
        "@type": "FinancialProduct",
        "name": "Finanziamento Condominio"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": `${siteUrl}/og-image.jpg`
      },
      "datePublished": "2025-01-01",
      "dateModified": new Date().toISOString().split('T')[0]
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Mediazione Creditizia per Condomini",
      "provider": {
        "@type": "FinancialService",
        "name": "AICondomini"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Italy"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servizi di Finanziamento",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ristrutturazione Facciate",
              "description": "Finanziamento per rifacimento facciate e cappotto termico"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Efficienza Energetica",
              "description": "Finanziamento per fotovoltaico e riqualificazione energetica"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Installazione Ascensori",
              "description": "Finanziamento per installazione ascensori e abbattimento barriere"
            }
          }
        ]
      }
    };

    // HowTo Schema
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Come otteniamo il finanziamento per il condominio",
      "description": "Guida passo-passo per ottenere un finanziamento per lavori condominiali con AICondomini",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Analisi Preliminare",
          "text": "Valutiamo la fattibilità del progetto e la solvibilità del condominio in 48 ore.",
          "image": `${siteUrl}/step1.jpg`
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Delibera e Firma",
          "text": "Supportiamo l'amministratore nella presentazione del piano in assemblea.",
          "image": `${siteUrl}/step2.jpg`
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Liquidità Immediata",
          "text": "Una volta approvato, i fondi vengono erogati per dare il via ai lavori.",
          "image": `${siteUrl}/step3.jpg`
        }
      ],
      "totalTime": "PT48H"
    };

    // Add all schemas to the page
    const schemas = [
      organizationSchema,
      productSchema,
      faqSchema,
      breadcrumbSchema,
      webPageSchema,
      serviceSchema,
      howToSchema
    ];

    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `structured-data-${index}`;
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // Cleanup function
    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null;
}
