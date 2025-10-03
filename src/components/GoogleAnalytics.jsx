import { useEffect } from 'react'

const GoogleAnalytics = () => {
  useEffect(() => {
    // Google Analytics 4 (GA4) tracking code
    // Replace 'G-XXXXXXXXXX' with your actual Google Analytics 4 Measurement ID
    const GA_MEASUREMENT_ID = 'G-8KSH739SWY' // Replace with your GA4 Measurement ID
    
    // Load Google Analytics script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script1)
    
    // Initialize Google Analytics
    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    `
    document.head.appendChild(script2)
    
    // Track page views
    const trackPageView = () => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true
        })
      }
    }
    
    // Track custom events
    window.trackEvent = (action, category = 'engagement', label = '', value = 0) => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value
        })
      }
    }
    
    // Track form submissions
    window.trackFormSubmission = (formName) => {
      window.trackEvent('form_submit', 'contact', formName)
    }
    
    // Track project views
    window.trackProjectView = (projectName) => {
      window.trackEvent('project_view', 'portfolio', projectName)
    }
    
    // Track social media clicks
    window.trackSocialClick = (platform) => {
      window.trackEvent('social_click', 'social_media', platform)
    }
    
    // Track download events (like CV download)
    window.trackDownload = (fileName) => {
      window.trackEvent('download', 'file_download', fileName)
    }
    
    // Clean up on unmount
    return () => {
      // Remove scripts if component unmounts
      const scripts = document.querySelectorAll('script[src*="googletagmanager"]')
      scripts.forEach(script => script.remove())
    }
  }, [])

  return null
}

export default GoogleAnalytics
