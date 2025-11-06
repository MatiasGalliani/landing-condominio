"use client";

import { useEffect } from 'react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://creditplan.it';

export function StructuredData() {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "name": "Creditplan Italia Network di Mediazione Credizia",
      "alternateName": "Creditplan",
      "url": siteUrl,
      "logo": `${siteUrl}/logo.png`,
      "description": "Servizi di mediazione creditizia per cessione del quinto, prestiti personali e finanziamenti per dipendenti e pensionati.",
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
      "serviceType": "Mediazione Creditizia",
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
      "name": "Cessione del Quinto",
      "description": "Prestito personale garantito con trattenuta diretta in busta paga o pensione. Importo massimo 75.000€, erogazione in 48 ore, istruttoria gratuita.",
      "provider": {
        "@type": "FinancialService",
        "name": "Creditplan"
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
        "Erogazione in 48 ore",
        "Istruttoria gratuita",
        "Approvazione in 24 ore",
        "Nessun garante richiesto",
        "Rata fissa",
        "Trasparenza totale"
      ]
    };

    // FAQPage Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Cos'è la Cessione del Quinto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La cessione del quinto è un prestito garantito con trattenuta diretta in busta paga o sulla pensione. Può essere richiesto senza dovere fornire motivazioni e l'importo massimo della rata non può eccedere il 20% dello stipendio netto mensile (un quinto)."
          }
        },
        {
          "@type": "Question",
          "name": "Quali sono i costi e le commissioni associate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nessun costo o commissioni accessorie; l'importo richiesto viene erogato \"chiavi in mano\"."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto tempo serve per ottenere il prestito?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Con Creditplan puoi ottenere la liquidità necessaria in pochi giorni grazie ai nostri partner bancari specializzati e al team qualificato."
          }
        },
        {
          "@type": "Question",
          "name": "Quali requisiti devo avere per richiedere la Cessione del Quinto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Puoi richiedere la Cessione del Quinto se sei un lavoratore dipendente (pubblico/statale o privato) con contratto a tempo indeterminato o un pensionato. Non è richiesto alcun garante."
          }
        },
        {
          "@type": "Question",
          "name": "Esiste un limite massimo di età per la Cessione del Quinto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sì, i pensionati possono ottenere il prestito fino a 89 anni alla scadenza del finanziamento."
          }
        },
        {
          "@type": "Question",
          "name": "Cosa succede se non raggiungo i requisiti per rinnovare una Cessione del Quinto già in corso?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In caso di mancato raggiungimento dei termini per il rinnovo, possiamo valutare insieme la Delegazione di Pagamento, una seconda trattenuta sullo stipendio che permette di ottenere ulteriore liquidità."
          }
        },
        {
          "@type": "Question",
          "name": "Perché dovrei scegliere Creditplan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le nostre convenzioni bancarie con i primari partner sul mercato, ci permettono di avere tassi competitivi e tempi rapidi di erogazione."
          }
        },
        {
          "@type": "Question",
          "name": "Posso richiedere il prestito se sono stato segnalato come cattivo pagatore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sì, la Cessione del Quinto è accessibile anche in caso di segnalazioni o protesti, in quanto non tiene conto delle segnalazioni nelle banche dati pubbliche."
          }
        },
        {
          "@type": "Question",
          "name": "È possibile estinguere anticipatamente la Cessione del Quinto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sì, puoi estinguere anticipatamente il prestito in qualsiasi momento beneficiando dello storno degli interessi futuri dovuti."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto costa la consulenza con Creditplan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nessun costo accessorio."
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
          "name": "Cessione del Quinto",
          "item": `${siteUrl}/cessione-del-quinto`
        }
      ]
    };

    // WebPage Schema
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Cessione del Quinto in 48 Ore | Prestito fino a 75.000€ | Creditplan",
      "description": "Ottieni fino a 75.000€ con la cessione del quinto in sole 48 ore. Processo rapido, sicuro e completamente digitale.",
      "url": siteUrl,
      "inLanguage": "it-IT",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Creditplan",
        "url": siteUrl
      },
      "about": {
        "@type": "FinancialProduct",
        "name": "Cessione del Quinto"
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
      "serviceType": "Mediazione Creditizia - Cessione del Quinto",
      "provider": {
        "@type": "FinancialService",
        "name": "Creditplan"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Italy"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servizi di Prestito",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cessione del Quinto per Dipendenti",
              "description": "Prestito per dipendenti pubblici e privati"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cessione del Quinto per Pensionati",
              "description": "Prestito per pensionati fino a 89 anni"
            }
          }
        ]
      }
    };

    // HowTo Schema
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Come richiedere la Cessione del Quinto",
      "description": "Guida passo-passo per richiedere la cessione del quinto con Creditplan",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Compila il form",
          "text": "Inserisci i tuoi dati in meno di 2 minuti. Nessun documento richiesto in questa fase.",
          "image": `${siteUrl}/step1.jpg`
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Ricevi la chiamata",
          "text": "Un nostro consulente esperto ti contatterà entro 2 ore per discutere la tua situazione.",
          "image": `${siteUrl}/step2.jpg`
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Ricevi il denaro",
          "text": "Dopo l'approvazione, ricevi il tuo finanziamento sul conto in 48 ore.",
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

