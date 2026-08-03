(function () {
  "use strict";

  const countryList = {
    AD: {
      name: {
        en: "Andorra",
        de: "Andorra",
      },
      tax_id: {
        ad_nrt: "Número de Registre Tributari",
      },
    },
    AE: {
      name: {
        en: "United Arab Emirates",
        de: "Vereinigte Arabische Emirate",
      },
      tax_id: {
        ae_trn: "Tax Registration Number",
      },
    },
    AR: {
      name: {
        en: "Argentina",
        de: "Argentinien",
      },
      tax_id: {
        ar_cuit: "Clave Única de Identificación Tributaria",
      },
    },
    AU: {
      name: {
        en: "Australia",
        de: "Australien",
      },
      tax_id: {
        au_abn: "Australian Business Number",
        au_arn: "Australian Registered Number",
      },
    },
    AT: {
      name: {
        en: "Austria",
        de: "Österreich",
      },
      tax_id: {
        eu_vat: "Umsatzsteuer-Identifikationsnummer (USt-IdNr.)",
      },
    },
    BE: {
      name: {
        en: "Belgium",
        de: "Belgien",
      },
      tax_id: {
        eu_vat: "Numéro de TVA / BTW-nummer",
      },
    },
    BG: {
      name: {
        en: "Bulgaria",
        de: "Bulgarien",
      },
      tax_id: {
        bg_uic: "Единен идентификационен код (UIC)",
        eu_vat: "Идентификационен номер по ДДС",
      },
    },
    BH: {
      name: {
        en: "Bahrain",
        de: "Bahrain",
      },
      tax_id: {
        bh_vat: "رقم التسجيل الضريبي (VAT ID)",
      },
    },
    BO: {
      name: {
        en: "Bolivia",
        de: "Bolivien",
      },
      tax_id: {
        bo_tin: "Número de Identificación Tributaria (TIN)",
      },
    },
    BR: {
      name: {
        en: "Brazil",
        de: "Brasilien",
      },
      tax_id: {
        br_cnpj: "Cadastro Nacional da Pessoa Jurídica (CNPJ)",
        br_cpf: "Cadastro de Pessoas Físicas (CPF)",
      },
    },
    CA: {
      name: {
        en: "Canada",
        de: "Kanada",
      },
      tax_id: {
        ca_bn: "Business Number",
        ca_gst_hst: "Goods and Services Tax / Harmonized Sales Tax (GST/HST)",
        ca_pst_bc: "Provincial Sales Tax (British Columbia) (PST BC)",
        ca_pst_mb: "Provincial Sales Tax (Manitoba) (PST MB)",
        ca_pst_sk: "Provincial Sales Tax (Saskatchewan) (PST SK)",
        ca_qst: "Taxe de vente du Québec (QST)",
      },
    },
    CH: {
      name: {
        en: "Switzerland",
        de: "Schweiz",
      },
      tax_id: {
        ch_uid: "Unternehmens-Identifikationsnummer (UID)",
        ch_vat: "Mehrwertsteuernummer (VAT ID)",
      },
    },
    CL: {
      name: {
        en: "Chile",
        de: "Chile",
      },
      tax_id: {
        cl_tin: "Rol Único Tributario (TIN)",
      },
    },
    CN: {
      name: {
        en: "China",
        de: "China",
      },
      tax_id: {
        cn_tin: "税务登记号 (TIN)",
      },
    },
    CO: {
      name: {
        en: "Colombia",
        de: "Kolumbien",
      },
      tax_id: {
        co_nit: "Número de Identificación Tributaria",
      },
    },
    CR: {
      name: {
        en: "Costa Rica",
        de: "Costa Rica",
      },
      tax_id: {
        cr_tin: "Cédula Jurídica (TIN)",
      },
    },
    DE: {
      name: {
        en: "Germany",
        de: "Deutschland",
      },
      tax_id: {
        de_stn: "Steuernummer (St-Nr.)",
        eu_vat: "Umsatzsteuer-Identifikationsnummer (USt-IdNr.)",
      },
    },
    DK: {
      name: {
        en: "Denmark",
        de: "Dänemark",
      },
      tax_id: {
        eu_vat: "Momsregistreringsnummer",
      },
    },
    EE: {
      name: {
        en: "Estonia",
        de: "Estland",
      },
      tax_id: {
        eu_vat: "Käibemaksukohustuslase number",
      },
    },
    ES: {
      name: {
        en: "Spain",
        de: "Spanien",
      },
      tax_id: {
        es_cif: "Código de Identificación Fiscal (CIF)",
        eu_vat: "Número de Identificación Fiscal (NIF)",
      },
    },
    FI: {
      name: {
        en: "Finland",
        de: "Finnland",
      },
      tax_id: {
        eu_vat: "Arvonlisäverotunniste (ALV-numero)",
      },
    },
    FR: {
      name: {
        en: "France",
        de: "Frankreich",
      },
      tax_id: {
        eu_vat: "Numéro de TVA intracommunautaire",
      },
    },
    GR: {
      name: {
        en: "Greece",
        de: "Griechenland",
      },
      tax_id: {
        eu_vat: "Αριθμός Φορολογικού Μητρώου (Α.Φ.Μ.)",
      },
    },
    HR: {
      name: {
        en: "Croatia",
        de: "Kroatien",
      },
      tax_id: {
        hr_oib: "Osobni Identifikacijski Broj (OIB)",
        eu_vat: "PDV identifikacijski broj",
      },
    },
    HU: {
      name: {
        en: "Hungary",
        de: "Ungarn",
      },
      tax_id: {
        hu_tin: "Adóazonosító jel (TIN)",
        eu_vat: "Közösségi adószám",
      },
    },
    IE: {
      name: {
        en: "Ireland",
        de: "Irland",
      },
      tax_id: {
        eu_vat: "Value Added Tax Identification Number",
      },
    },
    IT: {
      name: {
        en: "Italy",
        de: "Italien",
      },
      tax_id: {
        eu_vat: "Partita IVA",
      },
    },
    LT: {
      name: {
        en: "Lithuania",
        de: "Litauen",
      },
      tax_id: {
        eu_vat: "PVM mokėtojo kodas",
      },
    },
    LU: {
      name: {
        en: "Luxembourg",
        de: "Luxemburg",
      },
      tax_id: {
        eu_vat: "Numéro d'identification à la TVA",
      },
    },
    LV: {
      name: {
        en: "Latvia",
        de: "Lettland",
      },
      tax_id: {
        eu_vat: "Pievienotās vērtības nodokļa (PVN) reģistrācijas numurs",
      },
    },
    MT: {
      name: {
        en: "Malta",
        de: "Malta",
      },
      tax_id: {
        eu_vat: "Numru ta' Reġistrazzjoni tal-VAT",
      },
    },
    NL: {
      name: {
        en: "Netherlands",
        de: "Niederlande",
      },
      tax_id: {
        eu_vat: "BTW-identificatienummer",
      },
    },
    PL: {
      name: {
        en: "Poland",
        de: "Polen",
      },
      tax_id: {
        eu_vat: "Numer identyfikacji podatkowej (NIP)",
      },
    },
    PT: {
      name: {
        en: "Portugal",
        de: "Portugal",
      },
      tax_id: {
        eu_vat: "Número de Identificação Fiscal (NIF)",
      },
    },
    RO: {
      name: {
        en: "Romania",
        de: "Rumänien",
      },
      tax_id: {
        ro_tin: "Cod de Identificare Fiscală (CIF)",
        eu_vat: "Cod de înregistrare în scopuri de TVA",
      },
    },
    SE: {
      name: {
        en: "Sweden",
        de: "Schweden",
      },
      tax_id: {
        eu_vat: "Momsregistreringsnummer",
      },
    },
    SI: {
      name: {
        en: "Slovenia",
        de: "Slowenien",
      },
      tax_id: {
        si_tin: "Davčna številka (TIN)",
        eu_vat: "Identifikacijska številka za DDV",
      },
    },
    SK: {
      name: {
        en: "Slovakia",
        de: "Slowakei",
      },
      tax_id: {
        eu_vat: "Identifikačné číslo pre daň z pridanej hodnoty",
      },
    },
    CY: {
      name: {
        en: "Cyprus",
        de: "Zypern",
      },
      tax_id: {
        eu_vat: "Αριθμός Εγγραφής Φ.Π.Α.",
      },
    },
    CZ: {
      name: {
        en: "Czech Republic",
        de: "Tschechische Republik",
      },
      tax_id: {
        eu_vat: "Daňové identifikační číslo (DIČ)",
      },
    },
    DO: {
      name: {
        en: "Dominican Republic",
        de: "Dominikanische Republik",
      },
      tax_id: {
        do_rcn: "Registro Nacional del Contribuyente (RCN)",
      },
    },
    EC: {
      name: {
        en: "Ecuador",
        de: "Ecuador",
      },
      tax_id: {
        ec_ruc: "Registro Único de Contribuyentes (RUC)",
      },
    },
    EG: {
      name: {
        en: "Egypt",
        de: "Ägypten",
      },
      tax_id: {
        eg_tin: "رقم التسجيل الضريبي (TIN)",
      },
    },
    GB: {
      name: {
        en: "United Kingdom",
        de: "Vereinigtes Königreich",
      },
      tax_id: {
        gb_vat: "Value Added Tax ID (VAT ID)",
      },
    },
    GE: {
      name: {
        en: "Georgia",
        de: "Georgien",
      },
      tax_id: {
        ge_vat:
          "დამატებული ღირებულების გადასახადის საიდენტიფიკაციო ნომერი (VAT ID)",
      },
    },
    HK: {
      name: {
        en: "Hong Kong",
        de: "Hongkong",
      },
      tax_id: {
        hk_br: "商業登記號碼 (BR)",
      },
    },
    ID: {
      name: {
        en: "Indonesia",
        de: "Indonesien",
      },
      tax_id: {
        id_npwp: "Nomor Pokok Wajib Pajak (NPWP)",
      },
    },
    IL: {
      name: {
        en: "Israel",
        de: "Israel",
      },
      tax_id: {
        il_vat: "מס ערך מוסף (VAT ID)",
      },
    },
    IN: {
      name: {
        en: "India",
        de: "Indien",
      },
      tax_id: {
        in_gst: "Goods and Services Tax (GST)",
      },
    },
    IS: {
      name: {
        en: "Iceland",
        de: "Island",
      },
      tax_id: {
        is_vat: "Virðisaukaskattsnúmer (VAT ID)",
      },
    },
    JP: {
      name: {
        en: "Japan",
        de: "Japan",
      },
      tax_id: {
        jp_cn: "法人番号 (Corporate Number)",
        jp_rn: "登録番号 (Registration Number)",
        jp_trn: "税務署番号 (Tax Office Number)",
      },
    },
    KE: {
      name: {
        en: "Kenya",
        de: "Kenia",
      },
      tax_id: {
        ke_pin: "Personal Identification Number (PIN)",
      },
    },
    KR: {
      name: {
        en: "South Korea",
        de: "Südkorea",
      },
      tax_id: {
        kr_brn: "사업자등록번호 (Business Registration Number)",
      },
    },
    KZ: {
      name: {
        en: "Kazakhstan",
        de: "Kasachstan",
      },
      tax_id: {
        kz_bin: "Бизнес-сәйкестендіру нөмірі (BIN)",
      },
    },
    LI: {
      name: {
        en: "Liechtenstein",
        de: "Liechtenstein",
      },
      tax_id: {
        li_uid: "Unternehmens-Identifikationsnummer (UID)",
      },
    },
    MX: {
      name: {
        en: "Mexico",
        de: "Mexiko",
      },
      tax_id: {
        mx_rfc: "Registro Federal de Contribuyentes (RFC)",
      },
    },
    MY: {
      name: {
        en: "Malaysia",
        de: "Malaysia",
      },
      tax_id: {
        my_frp: "Nombor Pendaftaran Francais (FRP)",
        my_itn: "Nombor Cukai Individu (ITN)",
        my_sst: "Nombor Cukai Jualan dan Perkhidmatan (SST)",
      },
    },
    NG: {
      name: {
        en: "Nigeria",
        de: "Nigeria",
      },
      tax_id: {
        ng_tin: "Taxpayer Identification Number (TIN)",
      },
    },
    NO: {
      name: {
        en: "Norway",
        de: "Norwegen",
      },
      tax_id: {
        no_vat: "Merverdiavgift (VAT ID)",
        no_voec: "Forenklet registreringsordning (VAT ID)",
      },
    },
    NZ: {
      name: {
        en: "New Zealand",
        de: "Neuseeland",
      },
      tax_id: {
        nz_gst: "Goods and Services Tax Number (GST)",
      },
    },
    OM: {
      name: {
        en: "Oman",
        de: "Oman",
      },
      tax_id: {
        om_vat: "رقم ضريبة القيمة المضافة (VAT ID)",
      },
    },
    PE: {
      name: {
        en: "Peru",
        de: "Peru",
      },
      tax_id: {
        pe_ruc: "Registro Único de Contribuyentes",
      },
    },
    PH: {
      name: {
        en: "Philippines",
        de: "Philippinen",
      },
      tax_id: {
        ph_tin: "Tax Identification Number",
      },
    },
    RS: {
      name: {
        en: "Serbia",
        de: "Serbien",
      },
      tax_id: {
        rs_pib: "Poreski Identifikacioni Broj",
      },
    },
    RU: {
      name: {
        en: "Russia",
        de: "Russland",
      },
      tax_id: {
        ru_inn: "Идентификационный номер налогоплательщика (INN)",
        ru_kpp: "Код причины постановки на учет (KPP)",
      },
    },
    SA: {
      name: {
        en: "Saudi Arabia",
        de: "Saudi-Arabien",
      },
      tax_id: {
        sa_vat: "رقم ضريبة القيمة المضافة (VAT ID)",
      },
    },
    SG: {
      name: {
        en: "Singapore",
        de: "Singapur",
      },
      tax_id: {
        sg_gst: "Goods and Services Tax Registration Number (GST)",
        sg_uen: "Unique Entity Number (UEN)",
      },
    },
    SV: {
      name: {
        en: "El Salvador",
        de: "El Salvador",
      },
      tax_id: {
        sv_nit: "Número de Identificación Tributaria",
      },
    },
    TH: {
      name: {
        en: "Thailand",
        de: "Thailand",
      },
      tax_id: {
        th_vat: "เลขประจำตัวผู้เสียภาษีอากร (VAT ID)",
      },
    },
    TR: {
      name: {
        en: "Turkey",
        de: "Türkei",
      },
      tax_id: {
        tr_tin: "Vergi Kimlik Numarası (TIN)",
      },
    },
    TW: {
      name: {
        en: "Taiwan",
        de: "Taiwan",
      },
      tax_id: {
        tw_vat: "統一編號 (VAT ID)",
      },
    },
    UA: {
      name: {
        en: "Ukraine",
        de: "Ukraine",
      },
      tax_id: {
        ua_vat: "Ідентифікаційний номер платника податку (VAT ID)",
      },
    },
    US: {
      name: {
        en: "United States",
        de: "Vereinigte Staaten",
      },
      tax_id: {
        us_ein: "Employer Identification Number",
      },
    },
    UY: {
      name: {
        en: "Uruguay",
        de: "Uruguay",
      },
      tax_id: {
        uy_ruc: "Registro Único de Contribuyentes",
      },
    },
    VE: {
      name: {
        en: "Venezuela",
        de: "Venezuela",
      },
      tax_id: {
        ve_rif: "Registro de Información Fiscal",
      },
    },
    VN: {
      name: {
        en: "Vietnam",
        de: "Vietnam",
      },
      tax_id: {
        vn_tin: "Mã số thuế (TIN)",
      },
    },
    ZA: {
      name: {
        en: "South Africa",
        de: "Südafrika",
      },
      tax_id: {
        za_vat: "Value-Added Tax Registration Number (VAT ID)",
      },
    },
  };

  const LicenceOptions = {
    100100: {
      ID: "100100",
      price: 1600,
      category: "social",
      label: {
        "de": "Social (Standard)",
        "en": "Social (standard)"
      }
    },
    100200: {
      ID: "100200",
      price: 2900,
      category: "social",
      label: {
        "de": "Social (ohne Nennung)",
        "en": "Social (w/o credit)"
      }
    },
    100300: {
      ID: "100300",
      price: 4900,
      category: "social",
      label: {
        "de": "Social (unlimitiert)",
        "en": "Social (unlimited)"
      }
    },
    100400: {
      ID: "100400",
      price: 6900,
      category: "social",
      label: {
        "de": "Social (unlimitiert, ohne Nennung)",
        "en": "Social (unlimited w/o credit)"
      }
    },
    100500: {
      ID: "100500",
      price: 2900,
      category: "social",
      label: {
        "de": "Social (Video, Standard)",
        "en": "Social (video, standard)"
      }
    },
    100600: {
      ID: "100600",
      price: 4900,
      category: "social",
      label: {
        "de": "Social (Video ohne Nennung)",
        "en": "Social (video w/o credit)"
      }
    },
    100700: {
      ID: "100700",
      price: 6900,
      category: "social",
      label: {
        "de": "Social (Video unlimitiert)",
        "en": "Social (video unlimited)"
      }
    },
    100800: {
      ID: "100800",
      price: 8900,
      category: "social",
      label: {
        "de": "Social (Video unlimitiert, ohne Nennung)",
        "en": "Social (video unlimited w/o credit)"
      }
    },
    200100: {
      ID: "200100",
      price: 3400,
      category: "website",
      label: {
        "de": "Web/App (Standard)",
        "en": "Web/App (standard)"
      }
    },
    200200: {
      ID: "200200",
      price: 4900,
      category: "website",
      label: {
        "de": "Web/App (ohne Nennung)",
        "en": "Web/App (w/o credit)"
      }
    },
    200300: {
      ID: "200300",
      price: 7900,
      category: "website",
      label: {
        "de": "Web/App (unlimitiert)",
        "en": "Web/App (unlimited)"
      }
    },
    200400: {
      ID: "200400",
      price: 9900,
      category: "website",
      label: {
        "de": "Web/App (unlimitiert, ohne Nennung)",
        "en": "Web/App (unlimited w/o credit)"
      }
    },
    200500: {
      ID: "200500",
      price: 4900,
      category: "website",
      label: {
        "de": "Web/App (Video, Standard)",
        "en": "Web/App (video, standard)"
      }
    },
    200600: {
      ID: "200600",
      price: 7900,
      category: "website",
      label: {
        "de": "Web/App (Video ohne Nennung)",
        "en": "Web/App (video w/o credit)"
      }
    },
    200700: {
      ID: "200700",
      price: 9900,
      category: "website",
      label: {
        "de": "Web/App (Video unlimitiert)",
        "en": "Web/App (video unlimited)"
      }
    },
    200800: {
      ID: "200800",
      price: 12900,
      category: "website",
      label: {
        "de": "Web/App (Video unlimitiert, ohne Nennung)",
        "en": "Web/App (video unlimited w/o credit)"
      }
    },
    300100: {
      ID: "300100",
      price: 4900,
      category: "print",
      label: {
        "de": "Druck (Standard)",
        "en": "Print (standard)"
      }
    },
    300200: {
      ID: "300200",
      price: 6900,
      category: "print",
      label: {
        "de": "Druck (ohne Nennung)",
        "en": "Print (w/o credit)"
      }
    },
    300300: {
      ID: "300300",
      price: 9900,
      category: "print",
      label: {
        "de": "Druck (unlimitiert)",
        "en": "Print (unlimited)"
      }
    },
    300400: {
      ID: "300400",
      price: 13900,
      category: "print",
      label: {
        "de": "Druck (unlimitiert, ohne Nennung)",
        "en": "Print (unlimited w/o credit)"
      }
    },
    300500: {
      ID: "300500",
      price: 6900,
      category: "print",
      label: {
        "de": "Druck (Video, Standard)",
        "en": "Print (video standard)"
      }
    },
    300600: {
      ID: "300600",
      price: 8900,
      category: "print",
      label: {
        "de": "Druck (Video ohne Nennung)",
        "en": "Print (video w/o credit)"
      }
    },
    300700: {
      ID: "300700",
      price: 11900,
      category: "print",
      label: {
        "de": "Druck (Video unlimitiert)",
        "en": "Print (video unlimited)"
      }
    },
    300800: {
      ID: "300800",
      price: 15900,
      category: "print",
      label: {
        "de": "Druck (Video unlimitiert, ohne Nennung)",
        "en": "Print (video unlimited w/o credit)"
      }
    },
    400100: {
      ID: "400100",
      price: 7900,
      category: "ads",
      label: {
        "de": "Kampagnen (Standard)",
        "en": "Campaigns (standard)"
      }
    },
    400200: {
      ID: "400200",
      price: 9900,
      category: "ads",
      label: {
        "de": "Kampagnen (ohne Nennung)",
        "en": "Campaigns (w/o credit)"
      }
    },
    400300: {
      ID: "400300",
      price: 15900,
      category: "ads",
      label: {
        "de": "Kampagnen (unlimitiert)",
        "en": "Campaigns (unlimited)"
      }
    },
    400400: {
      ID: "400400",
      price: 19900,
      category: "ads",
      label: {
        "de": "Kampagnen (unlimitiert, ohne Nennung)",
        "en": "Campaigns (unlimited w/o credit)"
      }
    },
    400500: {
      ID: "400500",
      price: 9900,
      category: "ads",
      label: {
        "de": "Kampagnen (Video, Standard)",
        "en": "Campaigns (video, standard)"
      }
    },
    400600: {
      ID: "400600",
      price: 13900,
      category: "ads",
      label: {
        "de": "Kampagnen (Video ohne Nennung)",
        "en": "Campaigns (video w/o credit)"
      }
    },
    400700: {
      ID: "400700",
      price: 19900,
      category: "ads",
      label: {
        "de": "Kampagnen (Video unlimitiert)",
        "en": "Campaigns (video unlimited)"
      }
    },
    400800: {
      ID: "400800",
      price: 24900,
      category: "ads",
      label: {
        "de": "Kampagnen (Video unlimitiert, ohne Nennung)",
        "en": "Campaigns (video unlimited w/o credit)"
      }
    },
    500100: {
      ID: "500100",
      price: 7900,
      category: "film",
      label: {
        "de": "Film/TV (Standard)",
        "en": "Film/TV (standard)"
      }
    },
    500200: {
      ID: "500200",
      price: 9900,
      category: "film",
      label: {
        "de": "Film/TV (ohne Nennung)",
        "en": "Film/TV (w/o credit)"
      }
    },
    500300: {
      ID: "500300",
      price: 15900,
      category: "film",
      label: {
        "de": "Film/TV (unlimitiert)",
        "en": "Film/TV (unlimited)"
      }
    },
    500400: {
      ID: "500400",
      price: 19900,
      category: "film",
      label: {
        "de": "Film/TV (unlimitiert, ohne Nennung)",
        "en": "Film/TV (unlimited w/o credit)"
      }
    },
    500500: {
      ID: "500500",
      price: 9900,
      category: "film",
      label: {
        "de": "Film/TV (Video, Standard)",
        "en": "Film/TV (video, standard)"
      }
    },
    500600: {
      ID: "500600",
      price: 13900,
      category: "film",
      label: {
        "de": "Film/TV (Video ohne Nennung)",
        "en": "Film/TV (video w/o credit)"
      }
    },
    500700: {
      ID: "500700",
      price: 19900,
      category: "film",
      label: {
        "de": "Film/TV (Video unlimitiert)",
        "en": "Film/TV (video unlimited)"
      }
    },
    500800: {
      ID: "500800",
      price: 24900,
      category: "film",
      label: {
        "de": "Film/TV (Video unlimitiert, ohne Nennung)",
        "en": "Film/TV (video unlimited w/o credit)"
      }
    },
    600100: {
      ID: "600100",
      price: 8900,
      category: "enterprise",
      label: {
        "de": "Enterprise",
        "en": "Enterprise"
      }
    }
  };

  const cloudFunctions = {
    createCheckout: 'https://europe-west3-kataloop-313520.cloudfunctions.net/createCheckout',
    createSubscriptionCheckout: 'https://europe-west3-kataloop-313520.cloudfunctions.net/createSubscriptionCheckout',
    retrieveCustomer: 'https://europe-west3-kataloop-313520.cloudfunctions.net/retrieveCustomer',
  }

  const Cart = {
    // Initialize the cart
    init: function (
      containerId,
      templateId,
      regularViewId,
      errorViewId,
      emptyViewId,
      counter
    ) {
      console.log("Cart initialized");

      this.formatter = new Intl.NumberFormat(document.documentElement.lang, {
        style: "currency",
        currency: "EUR",
      });

      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.saveCart = this.saveCart.bind(this);
      this.render = this.render.bind(this);
      this.showRegularView = this.showRegularView.bind(this);
      this.showErrorView = this.showErrorView.bind(this);
      this.showEmptyView = this.showEmptyView.bind(this);
      this.pay = this.pay.bind(this);

      this.container = document.getElementById(containerId);
      this.template = document.getElementById(templateId);
      this.regularView = document.getElementById(regularViewId);
      this.errorView = document.getElementById(errorViewId);
      this.emptyView = document.getElementById(emptyViewId);
      this.counter = document.getElementById(counter);
      this.cart = JSON.parse(localStorage.getItem("cart")) || [];
      this.render();
    },

    // Add an item to the cart
    addItem: function (item) {
      const existingItem = this.cart.find((i) => i.ID === item.ID);

      if (existingItem) {
        this.removeItem(this.cart.indexOf(existingItem));
      }

      this.cart.push(item);
      this.saveCart();
      this.render();
    },

    // Remove an item from the cart by index
    removeItem: function (index) {
      this.cart.splice(index, 1);
      this.saveCart();
      this.render();
    },

    removeAll: function () {
      this.cart = [];
      this.saveCart();
      this.render();
    },

    // Save the cart to localStorage
    saveCart: function () {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    // Render the cart items into the container
    render: function () {
      this.container.innerHTML = "";

      if (this.cart.length === 0) {
        this.counter.innerHTML = 0;
        this.showEmptyView();
        return;
      }

      this.showRegularView();
      this.cart.forEach((item, index) => {
        const newItem = this.template.cloneNode(true);
        newItem.querySelector("#cart-item-preview").srcset = "";
        newItem.querySelector("#cart-item-preview").src = item.preview;
        newItem.querySelector("#cart-item-title").innerHTML = Object.values(
          item.licenses
        )
          .map((license) => license.label[document.documentElement.lang])
          .join(", ");
        newItem.querySelector("#cart-item-price").innerHTML =
          this.formatter.format(item.price / 100);

        this.container.appendChild(newItem);
      });
      this.counter.innerHTML = this.cart.length;
    },

    // Show the regular view
    showRegularView: function () {
      this.regularView.style.display = "flex";
      this.errorView.style.display = "none";
      this.emptyView.style.display = "none";
    },

    // Show the error view
    showErrorView: function () {
      this.regularView.style.display = "none";
      this.errorView.style.display = "flex";
      this.emptyView.style.display = "none";
    },

    // Show the empty view
    showEmptyView: function () {
      this.regularView.style.display = "none";
      this.errorView.style.display = "none";
      this.emptyView.style.display = "flex";
    },

    pay: async function (customer, customerCreateParams, endUser, jobReference) {
      return fetch(cloudFunctions.createCheckout, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: this.cart,
          lang: document.documentElement.lang,
          customer,
          customerCreateParams,
          endUser,
          jobReference,
          affiliateId: window.affiliateId
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          // Redirect to the Stripe Checkout page
          window.location.replace(response.url);
        })
        .catch((error) => {
          console.error("Error creating checkout session:", error);
          this.showErrorView();
        });
    },
  };

  const KataloopForm = {
    data: { price: 0, options: {} },

    init: function (
      formId,
      options,
      conditionalFields,
      priceLabel,
      priceField
    ) {
      KataloopForm.formatter = new Intl.NumberFormat(
        document.documentElement.lang,
        { style: "currency", currency: "EUR" }
      );

      KataloopForm.options = options;

      KataloopForm.optionElements = document.querySelectorAll(
        Object.keys(options)
          .map((id) => `[id="${id}"]`)
          .join(", ")
      );
      KataloopForm.optionElements = Array.prototype.slice.call(
        KataloopForm.optionElements
      );

      if (Object.keys(conditionalFields).length > 0) {
        KataloopForm.conditionalFieldElements = document.querySelectorAll(
          Object.keys(conditionalFields)
            .map((id) => `[id="${id}"]`)
            .join(", ")
        );
        KataloopForm.conditionalFieldElements = Array.prototype.slice.call(
          KataloopForm.conditionalFieldElements
        );
      } else {
        KataloopForm.conditionalFieldElements = [];
      }

      KataloopForm.priceLabel = document.getElementById(priceLabel);
      KataloopForm.priceField = document.getElementById(priceField);

      KataloopForm.optionElements.forEach((element) => {
        element.addEventListener("change", KataloopForm.handleOptionChange);
      });

      KataloopForm.form = document.getElementById(formId);

      KataloopForm.updateConditionalFields();
      KataloopForm.updatePrice();

      // Initialize MutationObserver for licenses-slider elements
      KataloopForm.initLicenseSliderObserver();

      // Lizenz-Radios abwählbar machen (vormals separates Webflow-Script)
      KataloopForm.initLicenseUncheck();

      // Verzicht-Namensnennung / Unlimitiert-Toggles -> aktiven Slider setzen
      KataloopForm.initLicenseToggles();
    },

    initLicenseSliderObserver: function () {
      // Find all licenses-slider elements
      const licenseSliders = document.querySelectorAll('.licenses-slider');

      if (licenseSliders.length === 0) {
        return;
      }

      // Create a MutationObserver to watch for class changes
      const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const element = mutation.target;
            const isActive = element.classList.contains('is-active');

            if (isActive) {
              // When slider becomes active, check and set the correct license
              KataloopForm.handleSliderActivation(element);
            }
          }
        });
      });

      // Observe each licenses-slider for class changes
      licenseSliders.forEach(function (slider) {
        observer.observe(slider, {
          attributes: true,
          attributeFilter: ['class']
        });
      });
    },

    handleSliderActivation: function (sliderElement) {
      const activeElements = KataloopForm.optionElements.filter(el => el.checked);
      const activeElementIndex = activeElements.map(el => Math.floor(parseInt(el.id) / 100000))

      // Find all available license options in this slider
      const licenseElements = sliderElement.querySelectorAll('.licensing-radio-field');

      licenseElements.forEach(el => {
        const input = el.querySelector('input[type="radio"]');

        if (activeElementIndex.includes(Math.floor(parseInt(input.id) / 100000))) {
          el.click();
        }
      })
    },

    handleOptionChange: function () {
      KataloopForm.updateConditionalFields();
      KataloopForm.updatePrice();
    },

    updateConditionalFields: function () {
      // TODO
    },

    updatePrice: function () {
      KataloopForm.data = { price: 0, options: {} };

      for (const option of Object.values(KataloopForm.options)) {
        const priceLabel =
          option.priceLabel && document.getElementById(option.priceLabel);

        if (priceLabel) {
          priceLabel.innerHTML = KataloopForm.formatter.format(0);
        }
      }

      let selectedLicenseCount = 0;

      const price = KataloopForm.optionElements.reduce((acc, element) => {
        const option = KataloopForm.options[element.id];

        if (!element.checked) {
          // Container-Element (licensing-radio-field) stylen
          const radioField = element.closest('.licensing-radio-field');
          if (radioField) {
            radioField.style.backgroundColor = "var(--graygreen--800)";
            radioField.style.borderColor = "var(--graygreen--700)";
          }

          // Bild ausblenden
          const checkImg = element.parentElement.querySelector('.check-license-img');
          if (checkImg) {
            checkImg.style.display = 'none';
          }

          // Schriftfarben zurücksetzen
          const priceInfo = element.parentElement.querySelector('.license-price-info');
          if (priceInfo) {
            priceInfo.style.backgroundColor = 'var(--graygreen--900)';
            priceInfo.style.color = 'var(--white)';
          }

          const radioLabel = element.parentElement.querySelector('.licensing-radio-label');
          if (radioLabel) {
            radioLabel.style.color = 'var(--white)';
          }

          return acc;
        } else {
          selectedLicenseCount++;

          // Container-Element (licensing-radio-field) stylen
          const radioField = element.closest('.licensing-radio-field');
          if (radioField) {
            radioField.style.backgroundColor = "var(--yellow--900)";
            radioField.style.borderColor = "var(--yellow--400)";
          }

          // Bild einblenden
          const checkImg = element.parentElement.querySelector('.check-license-img');
          if (checkImg) {
            checkImg.style.display = 'block';
          }

          // Schriftfarben für aktiven Zustand
          const priceInfo = element.parentElement.querySelector('.license-price-info');
          if (priceInfo) {
            priceInfo.style.backgroundColor = 'var(--yellow--400)';
            priceInfo.style.color = 'var(--yellow--900)';
          }

          const radioLabel = element.parentElement.querySelector('.licensing-radio-label');
          if (radioLabel) {
            radioLabel.style.color = 'var(--yellow--400)';
          }
        }

        const priceLabel =
          option.priceLabel && document.getElementById(option.priceLabel);

        if (priceLabel) {
          priceLabel.innerHTML = KataloopForm.formatter.format(option.license.price / 100);
        }

        KataloopForm.data.options[option.license.category] = option.license;

        return acc + option.license.price;
      }, 0);

      KataloopForm.priceLabel.innerHTML = KataloopForm.formatter.format(
        price / 100
      );

      KataloopForm.data.price = price;
      KataloopForm.priceField.value = price;

      const lang = document.documentElement.lang;

      if (window.addToCartButton) {
        if (price === 0) {
          window.addToCartButton.classList.add("cc-disable");
          window.addToCartButton.disabled = true;

          window.addToCartButtonText.innerHTML = lang === "de" ? "In den Warenkorb" : "Add to cart";
        } else {
          window.addToCartButton.classList.remove("cc-disable");
          window.addToCartButton.disabled = false;

          if (selectedLicenseCount === 1) {
            window.addToCartButtonText.innerHTML = lang === "de" ? "1 Lizenz hinzufügen" : "Add 1 license to cart";
          } else {
            window.addToCartButtonText.innerHTML = lang === "de" ? `${selectedLicenseCount} Lizenzen hinzufügen` : `Add ${selectedLicenseCount} licenses to cart`;
          }
        }
      }
    },

    // Macht die Lizenz-Radios abwählbar: zeigt die Uncheck-Fläche nur beim
    // aktiven Radio, hebt beim Klick die Auswahl auf (inkl. Webflow-Klassen)
    // und aktualisiert den Preis. Vormals separates Webflow-Custom-Code-Script.
    initLicenseUncheck: function () {
      document.querySelectorAll("#radio-field").forEach((radioField) => {
        const radioInput = radioField.querySelector('input[type="radio"]');
        const uncheckButton = radioField.querySelector(".uncheck-img-wrapper");
        const checkDisplay = radioField.querySelector(".w-form-formradioinput");
        if (radioInput && uncheckButton) {
          uncheckButton.style.display = radioInput.checked ? "flex" : "none";
          radioInput.addEventListener("change", function () {
            document
              .querySelectorAll(`input[name="${radioInput.name}"]`)
              .forEach((radio) => {
                if (radio != this) radio.checked = false;
                const b = radio
                  .closest("#radio-field")
                  .querySelector(".uncheck-img-wrapper");
                if (b) b.style.display = "none";
              });
            uncheckButton.style.display = this.checked ? "flex" : "none";
          });
          uncheckButton.addEventListener("click", function (e) {
            e.preventDefault();
            radioInput.checked = false;
            uncheckButton.style.display = "none";
            checkDisplay.classList.remove("w--redirected-checked");
            checkDisplay.classList.remove("w--redirected-focus");
            KataloopForm.updatePrice();
          });
        }
      });
    },

    // Liest die Toggles cb-nc (Verzicht Namensnennung) und cb-unl (Unlimitiert)
    // und setzt is-active auf den passenden .licenses-slider (data-key:
    // std | nc | unl | unl-nc). Der Slider-Observer oben reagiert darauf.
    initLicenseToggles: function () {
      const nc = document.getElementById("cb-nc");
      const unl = document.getElementById("cb-unl");
      const sliders = document.querySelectorAll(".licenses-slider");
      function getKey() {
        const ncOn = nc && nc.checked;
        const unlOn = unl && unl.checked;
        if (!ncOn && !unlOn) return "std";
        if (ncOn && !unlOn) return "nc";
        if (!ncOn && unlOn) return "unl";
        return "unl-nc";
      }
      function update() {
        const key = getKey();
        sliders.forEach((el) => {
          el.classList.toggle("is-active", el.dataset.key === key);
        });
      }
      [nc, unl].forEach((el) => el && el.addEventListener("change", update));
      update();
    },

    clear: function () {
      const elements = document.getElementsByClassName('uncheck-img-wrapper');

      for (let i = 0; i < elements.length; ++i) {
        elements[i].click();
      }

      const licenseSliders = document.querySelectorAll('.licenses-slider');

      if (licenseSliders.length === 0) {
        return;
      }

      licenseSliders.forEach((slider, index) => {
        if (index === 0) {
          slider.classList.add('is-active');
        } else {
          slider.classList.remove('is-active');
        }
      });
    },

    submitting: false,

    submit: function () {
      if (KataloopForm.submitting) return;

      const selectedLicenses = KataloopForm.optionElements.filter((element) => element.checked).length;
      if (selectedLicenses === 0) return;

      KataloopForm.submitting = true;

      const lang = document.documentElement.lang;

      if (selectedLicenses === 1) {
        window.addToCartButtonText.innerHTML = lang === "de" ? "1 Lizenz hinzugefügt" : "1 license added";
      } else {
        window.addToCartButtonText.innerHTML = lang === "de" ? `${selectedLicenses} Lizenzen hinzugefügt` : `${selectedLicenses} licenses added`;
      }

      if (window.addToCartButtonIcon) {
        window.addToCartButtonIcon.style.display = "inline-block";
      }

      setTimeout(() => {
        KataloopForm.clear();

        KataloopForm.updatePrice();

        if (window.addToCartButtonIcon) {
          window.addToCartButtonIcon.style.display = "none";
        }

        KataloopForm.submitting = false;

        document.getElementById("wf-form-licenses-form").reset();
      }, 2000);
    }
  };

  async function subscribe(customer, customerCreateParams, endUser, jobReference) {
    return fetch(
      cloudFunctions.createSubscriptionCheckout,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceKey: localStorage.getItem("subscription"),
          lang: document.documentElement.lang,
          customer,
          customerCreateParams,
          endUser,
          jobReference,
          affiliateId: window.affiliateId
        }),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        // Redirect to the Stripe Checkout page
        window.location.replace(response.url);
      })
      .catch((error) => {
        console.error("Error creating checkout session:", error);
        this.showErrorView();
      });
  }

  function mapCartToGtag() {
    let total = 0;
    const gtagCartArray = []

    window.Cart.cart.forEach((item, index) => {
      gtagCartArray.push(mapCartItemToGtag(item, index));

      total += item.price;
    })

    return {
      currency: "EUR",
      value: total / 100,
      items: gtagCartArray,
    }
  }

  function mapCartItemToGtag(item, index) {
    return {
      item_id: item.ID,
      item_name: item.title,
      item_variant: item.licenses.join(","),
      price: item.price / 100,
      quantity: 1,
      index
    }
  }

  function checkTextElement(element) {
    if (!element)
      return false;

    if (element.value.trim() === "") {
      element.style.borderColor = '#E4555F'

      return false;
    } else {
      element.style.borderColor = ''

      return true;
    }
  }

  function showCustomerDetails(customer, type) {
    const proceedButton = document.getElementById("checkout-btn-proceed");
    const privacyCheckbox = document.getElementById("Datenschutz-2");
    const endUserInput = document.getElementById("checkout-end-user");
    const jobReferenceInput = document.getElementById("checkout-job-reference");

    const checkProceedButton = () => {
      let hasMissingData = false

      hasMissingData = type !== 'subscription' && (!checkTextElement(endUserInput) || hasMissingData)

      if (!privacyCheckbox.checked) {
        hasMissingData = true;

        privacyCheckbox.parentNode.firstElementChild.style.borderColor = '#E4555F'
      } else {
        privacyCheckbox.parentNode.firstElementChild.style.borderColor = ''
      }

      return !hasMissingData;
    };

    document.getElementById("checkout-account-existing").style.display =
      "block";
    document.getElementById("end-client-job-no") &&
      (document.getElementById("end-client-job-no").style.display = "flex");
    document.getElementById("licensing-terms") &&
      (document.getElementById("licensing-terms").style.display = "flex");
    document.getElementById("terms-and-conditions") &&
      (document.getElementById("terms-and-conditions").style.display = "flex");
    document.getElementById("proceed-to-payment").style.display = "flex";
    document.getElementById("checkout-account-not-existing").style.display =
      "none";

    document.getElementById("existing-street").innerHTML = customer.street;
    document.getElementById("existing-zip-code").innerHTML = customer.zip;
    document.getElementById("existing-city").innerHTML = customer.city;
    document.getElementById("existing-country").innerHTML = customer.country;
    document.getElementById("existing-tax-number").innerHTML = customer.tax_id;
    document.getElementById("existing-name").innerHTML = customer.name;
    document.getElementById("existing-email").innerHTML = customer.email;

    document.getElementById("checkout-btn-account").href =
      "https://billing.stripe.com/p/login/3cs3fQbrT5nQdtSaEE?prefilled_email=" +
      customer.email;

    let loading = false;

    proceedButton.onclick = async function () {
      if (loading)
        return;

      if (!checkProceedButton()) {
        document.getElementById("checkout-error-message").style.display = 'block'

        return;
      } else {
        document.getElementById("checkout-error-message").style.display = ''
      }

      document.getElementById('checkout-btn-proceed-text').style.display = 'none'
      document.getElementById('loading-indicator-div').style.display = 'block'

      try {
        loading = true;

        if (type === "checkout") {
          await window.Cart.pay(
            customer.id,
            null,
            endUserInput?.value,
            jobReferenceInput.value
          );
        } else {
          await subscribe(
            customer.id,
            null,
            endUserInput?.value,
            jobReferenceInput.value
          );
        }
      } catch (e) {
        document.getElementById('checkout-btn-proceed-text').style.display = 'inline-block'
        document.getElementById('loading-indicator-div').style.display = 'none'
      } finally {
        loading = false
      }
    };
  }

  function showNewCustomerForm(type) {
    const proceedButton = document.getElementById("checkout-btn-proceed");
    const nameInput = document.getElementById("checkout-name");
    const emailInput = document.getElementById("checkout-input-email");
    const countryInput = document.getElementById("checkout-country");
    const taxTypeInput = document.getElementById("checkout-type-of-tax-number");
    const taxNumberInput = document.getElementById("checkout-tax-number");
    const addressLine1Input = document.getElementById(
      "checkout-address-line-1"
    );
    const addressLine2Input = document.getElementById(
      "checkout-address-line-2"
    );
    const cityInput = document.getElementById("checkout-city");
    const zipCodeInput = document.getElementById("checkout-zip-code");

    const privacyCheckbox = document.getElementById("Datenschutz-2");
    const endUserInput = document.getElementById("checkout-end-user");
    const jobReferenceInput = document.getElementById("checkout-job-reference");

    const checkProceedButton = () => {
      let hasMissingData = false;

      hasMissingData = type !== 'subscription' && (!checkTextElement(endUserInput) || hasMissingData)
      hasMissingData = !checkTextElement(nameInput) || hasMissingData
      hasMissingData = !checkTextElement(emailInput) || hasMissingData
      hasMissingData = !checkTextElement(countryInput) || hasMissingData
      hasMissingData = !checkTextElement(addressLine1Input) || hasMissingData
      hasMissingData = !checkTextElement(cityInput) || hasMissingData
      hasMissingData = !checkTextElement(zipCodeInput) || hasMissingData

      if (countryInput?.value !== "DE") {
        hasMissingData = !checkTextElement(taxTypeInput) || hasMissingData
        hasMissingData = !checkTextElement(taxNumberInput) || hasMissingData
      } else {
        // DE: Steuerfelder sind optional → keine rote Markierung erzwingen
        // bzw. eine bestehende entfernen.
        if (taxTypeInput) taxTypeInput.style.borderColor = ''
        if (taxNumberInput) taxNumberInput.style.borderColor = ''
      }

      if (!privacyCheckbox.checked) {
        hasMissingData = true;

        privacyCheckbox.parentNode.firstElementChild.style.borderColor = '#E4555F'
      } else {
        privacyCheckbox.parentNode.firstElementChild.style.borderColor = ''
      }

      return !hasMissingData;
    };

    document.getElementById("checkout-account-not-existing").style.display =
      "block";
    document.getElementById("end-client-job-no") &&
      (document.getElementById("end-client-job-no").style.display = "flex");
    document.getElementById("licensing-terms") &&
      (document.getElementById("licensing-terms").style.display = "flex");
    document.getElementById("terms-and-conditions") &&
      (document.getElementById("terms-and-conditions").style.display = "flex");
    document.getElementById("proceed-to-payment").style.display = "flex";
    document.getElementById("checkout-account-existing").style.display = "none";

    let loading = false;

    proceedButton.onclick = async function () {
      if (loading)
        return

      if (!checkProceedButton()) {
        document.getElementById("checkout-error-message").style.display = 'block'

        return;
      } else {
        document.getElementById("checkout-error-message").style.display = ''
      }

      const tax_id = taxTypeInput.value && taxNumberInput.value ? {
        type: taxTypeInput.value,
        value: taxNumberInput.value,
      } : undefined

      const customerCreateParams = {
        name: nameInput.value,
        email: emailInput.value,
        address: {
          line1: addressLine1Input.value,
          line2: addressLine2Input.value,
          city: cityInput.value,
          country: countryInput.value,
          postal_code: zipCodeInput.value,
        },
        tax_id,
      };

      document.getElementById('checkout-btn-proceed-text').style.display = 'none'
      document.getElementById('loading-indicator-div').style.display = 'block'

      try {
        loading = true;

        if (type === "checkout") {
          await window.Cart.pay(
            null,
            customerCreateParams,
            endUserInput?.value,
            jobReferenceInput.value
          );
        } else {
          await subscribe(
            null,
            customerCreateParams,
            endUserInput?.value,
            jobReferenceInput.value
          );
        }
      } catch (e) {
        document.getElementById('checkout-btn-proceed-text').style.display = 'inline-block'
        document.getElementById('loading-indicator-div').style.display = 'none'
      } finally {
        loading = false
      }
    };
  }

  // IDs der Blöcke, die im Neukunden-Formular sichtbar werden und in der
  // Vorschau gesperrt/gedimmt werden. licensing-terms bzw.
  // terms-and-conditions liegen innerhalb von proceed-to-payment und werden
  // durch dessen Sperre mit abgedeckt.
  const NEW_CUSTOMER_PREVIEW_LOCK_IDS = [
    "checkout-account-not-existing",
    "end-client-job-no",
    "proceed-to-payment",
  ];

  // Zeigt beim Betreten des Checkouts (Items im Warenkorb, aber noch keine
  // E-Mail bestätigt) eine Vorschau des Neukunden-Formulars an: dieselben
  // Blöcke wie showNewCustomerForm(), aber OHNE Button-Verdrahtung, per
  // `inert` nicht bedienbar und via Opacity gedimmt. So sieht der Nutzer
  // vorab, welche Angaben ihn erwarten. Webflow bleibt unverändert.
  function showNewCustomerFormPreview(type) {
    const notExisting = document.getElementById("checkout-account-not-existing");
    if (!notExisting) return;

    notExisting.style.display = "block";
    document.getElementById("end-client-job-no") &&
      (document.getElementById("end-client-job-no").style.display = "flex");
    document.getElementById("licensing-terms") &&
      (document.getElementById("licensing-terms").style.display = "flex");
    document.getElementById("terms-and-conditions") &&
      (document.getElementById("terms-and-conditions").style.display = "flex");
    document.getElementById("proceed-to-payment") &&
      (document.getElementById("proceed-to-payment").style.display = "flex");
    document.getElementById("checkout-account-existing") &&
      (document.getElementById("checkout-account-existing").style.display =
        "none");

    // inert: gesamter Teilbaum nicht klick- und nicht fokussierbar (inkl. Tab).
    NEW_CUSTOMER_PREVIEW_LOCK_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.inert = true;
      el.style.opacity = "0.5";
      // Felder zusätzlich hart deaktivieren, damit auch Browser-Autofill sie
      // nicht befüllt. Nur zuvor aktive Felder markieren, damit beim Aufheben
      // der bereits verwaltete disabled-Zustand (z.B. Steuerart ohne Land)
      // nicht überschrieben wird.
      el.querySelectorAll("input, select, textarea").forEach((field) => {
        if (!field.disabled) {
          field.disabled = true;
          field.setAttribute("data-kl-preview-disabled", "");
        }
      });
    });
  }

  // Hebt die Vorschau-Sperre wieder auf. Die display-Werte setzen
  // showCustomerDetails()/showNewCustomerForm() anschließend ohnehin neu.
  function clearNewCustomerFormPreview() {
    NEW_CUSTOMER_PREVIEW_LOCK_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.inert = false;
      el.style.opacity = "";
    });
    // Für die Vorschau deaktivierte Felder wieder freigeben.
    document
      .querySelectorAll("[data-kl-preview-disabled]")
      .forEach((field) => {
        field.disabled = false;
        field.removeAttribute("data-kl-preview-disabled");
      });
  }

  function retrieveCustomer(email, type) {
    fetch(cloudFunctions.retrieveCustomer, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((response) => {
        // Vorschau-Sperre lösen, bevor das echte Formular übernimmt.
        clearNewCustomerFormPreview();

        if (response.customer) {
          showCustomerDetails(response.customer, type);
        } else {
          showNewCustomerForm(type);
        }
      })
      .catch((error) => {
        console.error("Error retrieving customer:", error);
      });

    (typeof gtag === 'function') && gtag("event", "begin_checkout", mapCartToGtag());
  }

  // Expose Cart to the global object
  window.Cart = Cart;
  window.KataloopForm = KataloopForm;

  function addToCart(e) {
    e.preventDefault();
    e.stopPropagation();

    const formData = KataloopForm.data;

    console.log("Adding to cart", formData);

    const product = document.getElementById("product-data").dataset;

    const url = {
      de: document.querySelector('link[hreflang="de"]').href,
      en: document.querySelector('link[hreflang="en"]').href,
    };

    const media = product.type === 'Video' ? 'video' : 'image'

    const item = {
      ID: product.id,
      preview: product.preview,
      licenses: Object.values(formData.options),
      price: formData.price,
      title: product.title,
      url,
      media: media
    };
    window.Cart.addItem(item);

    (typeof gtag === 'function') && gtag("event", "add_to_cart", {
      currency: "EUR",
      value: formData.price / 100,
      items: [
        {
          item_id: item.ID,
          item_name: item.title,
          item_variant: item.licenses.join(","),
          price: item.price / 100,
          quantity: 1
        }
      ]
    });

    KataloopForm.submit();
  }

  function checkLoaded() {
    return (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    );
  }

  function populateCountryDropdown() {
    const countrySelect = document.getElementById("checkout-country");
    const taxTypeSelect = document.getElementById(
      "checkout-type-of-tax-number"
    );
    if (!countrySelect) {
      console.error("Country select not found");
      return;
    }
    if (!taxTypeSelect) {
      console.error("Tax type select not found");
      return;
    }

    // Initially disable the tax type dropdown
    taxTypeSelect.disabled = true;
    const defaultTaxTypeOption = document.createElement("option");
    defaultTaxTypeOption.value = "";
    defaultTaxTypeOption.textContent =
      document.documentElement.lang === "de"
        ? "Bitte wählen Sie zuerst ein Land"
        : "Please select a country first";
    taxTypeSelect.innerHTML = "";
    taxTypeSelect.appendChild(defaultTaxTypeOption);

    const lang = document.documentElement.lang || "en"; // Default to English if language is not set

    // Sort countries alphabetically by their localized name
    const sortedCountries = Object.entries(countryList).sort((a, b) => {
      const nameA = a[1].name[lang] || a[1].name.en;
      const nameB = b[1].name[lang] || b[1].name.en;
      return nameA.localeCompare(nameB, lang);
    });

    // Clear existing options
    countrySelect.innerHTML = "";

    // Add a default option
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent =
      lang === "de" ? "Land auswählen" : "Select a country";
    countrySelect.appendChild(defaultOption);

    // Add sorted country options
    sortedCountries.forEach(([code, country]) => {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = country.name[lang] || country.name.en;
      countrySelect.appendChild(option);
    });

    // Add event listener for country selection change
    countrySelect.addEventListener("change", function () {
      populateTaxTypeDropdown(this.value);
    });

    // Auf der deutschen URL (Pfad ohne /en-Segment) Deutschland vorauswählen
    // und direkt die passende Steuerart-Liste laden.
    const isGermanUrl = !/(^|\/)en(\/|$)/.test(window.location.pathname);
    if (isGermanUrl) {
      countrySelect.value = "DE";
      populateTaxTypeDropdown("DE");
    }
  }

  // Add this function after the populateCountryDropdown function

  function populateTaxTypeDropdown(countryCode) {
    const taxTypeSelect = document.getElementById(
      "checkout-type-of-tax-number"
    );
    if (!taxTypeSelect) {
      console.error("Tax type select not found");
      return;
    }

    // Clear existing options
    taxTypeSelect.innerHTML = "";

    if (!countryCode) {
      // Disable the select when no country is selected
      taxTypeSelect.disabled = true;
      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent =
        document.documentElement.lang === "de"
          ? "Bitte wählen Sie zuerst ein Land"
          : "Please select a country first";
      taxTypeSelect.appendChild(defaultOption);
      return;
    }

    // Enable the select when a country is selected
    taxTypeSelect.disabled = false;

    const country = countryList[countryCode];
    if (!country || !country.tax_id) {
      console.error("No tax types found for the selected country");
      const noTaxOption = document.createElement("option");
      noTaxOption.value = "";
      noTaxOption.textContent =
        document.documentElement.lang === "de"
          ? "Keine Steuer-ID für dieses Land verfügbar"
          : "No tax ID available for this country";
      taxTypeSelect.appendChild(noTaxOption);
      return;
    }

    if (countryCode === "DE") {
      // Steuerart & -nummer sind bei DE nicht Pflicht → eine evtl. aus einer
      // vorherigen Länderauswahl gesetzte rote Markierung wieder entfernen.
      taxTypeSelect.style.borderColor = "";
      const deTaxNumber = document.getElementById("checkout-tax-number");
      if (deTaxNumber) deTaxNumber.style.borderColor = "";

      document.getElementById("tax-id-info-note")?.classList.add("u-d-none")
      document.getElementById("tax-id-type-germany-subscription")?.classList.remove("u-d-none")
      document.getElementById("tax-id-germany-subscription")?.classList.remove("u-d-none")
      document.getElementById("tax-id-type-germany-stock")?.classList.remove("u-d-none")
      document.getElementById("tax-id-germany-stock")?.classList.remove("u-d-none")
    } else {
      document.getElementById("tax-id-info-note")?.classList.remove("u-d-none")
      document.getElementById("tax-id-type-germany-subscription")?.classList.add("u-d-none")
      document.getElementById("tax-id-germany-subscription")?.classList.add("u-d-none")
      document.getElementById("tax-id-type-germany-stock")?.classList.add("u-d-none")
      document.getElementById("tax-id-germany-stock")?.classList.add("u-d-none")
    }

    // Add a default option
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent =
      document.documentElement.lang === "de"
        ? "Steuerart auswählen"
        : "Select tax type";
    taxTypeSelect.appendChild(defaultOption);

    // Add tax type options
    Object.entries(country.tax_id).forEach(([taxType, taxName]) => {
      const option = document.createElement("option");
      option.value = taxType;
      option.textContent = taxName;
      taxTypeSelect.appendChild(option);
    });
  }

  function populateCheckoutOverview() {
    window.retrieveCustomerButton =
      document.getElementById("checkout-btn-email");

    if (window.retrieveCustomerButton) {
      window.retrieveCustomerButton.addEventListener("click", function () {
        if (!checkTextElement(document.getElementById("checkout-input-email")))
          return

        retrieveCustomer(
          document.getElementById("checkout-input-email").value,
          "checkout"
        );
      });

      if (window.Cart.cart.length > 0) {
        document.getElementById("no-items").style.display = "none";
        document.getElementById("checkout-items-wrapper").style.display =
          "block";
        document.getElementById("checkout-account").style.display = "block";

        const container = document.getElementById("checkout-items");
        const template = document.getElementById("checkout-item-template");

        // Clear existing items
        container.innerHTML = "";

        let total = 0;

        // Add each cart item
        window.Cart.cart.forEach((item, index) => {
          const newItem = template.cloneNode(true);
          newItem.querySelector("#checkout-item-preview").srcset = "";
          newItem.querySelector("#checkout-item-preview").src = item.preview;
          newItem.querySelector("#checkout-item-title").innerHTML = item.title;
          newItem.querySelector("#checkout-thumbnail-link").href =
            item.url[document.documentElement.lang ?? "en"];
          newItem.querySelector("#checkout-item-license").innerHTML =
            Object.values(item.licenses)
              .map((license) => license.label[document.documentElement.lang])
              .join(", ");
          newItem.querySelector("#checkout-item-price").innerHTML =
            window.Cart.formatter.format(item.price / 100);

          const deleteButton = newItem.querySelector("#checkout-delete-item");
          if (deleteButton) {
            deleteButton.onclick = function () {
              window.Cart.removeItem(index);
              populateCheckoutOverview();
            };
          }

          container.appendChild(newItem);

          total += item.price;
        });

        document.getElementById("checkout-total-price").innerHTML =
          window.Cart.formatter.format(total / 100);

        // Gedimmte Neukunden-Vorschau anzeigen, solange noch keine E-Mail
        // bestätigt wurde.
        showNewCustomerFormPreview("checkout");
      }

      else {
        document.getElementById("no-items").style.display = "block";
        document.getElementById("checkout-items-wrapper").style.display =
          "none";
        document.getElementById("checkout-account").style.display = "none";
      }

      (typeof gtag === 'function') && gtag("event", "view_cart", mapCartToGtag());
    }
  }

  // Alle buchbaren Pläne an einer Stelle gepflegt. Jeder Eintrag verknüpft:
  // - den internen Plan-Key (wird in localStorage["subscription"] gespeichert
  //   und unverändert als `priceKey` an die Cloud Function
  //   `createSubscriptionCheckout` gesendet),
  // - die IDs der Checkout-Anzeige-Blöcke auf /zusammenarbeit-starten.
  //
  // Die Zuordnung Plan-Key -> Stripe-Price-ID lebt bewusst NICHT hier,
  // sondern ausschließlich serverseitig in der Cloud Function.
  const SUBSCRIPTION_PLANS = {
    basic_plan: {
      itemId: "checkout-item-basic-plan",
      totalId: "checkout-total-price-basic",
    },
    professional_plan: {
      itemId: "checkout-item-professional-plan",
      totalId: "checkout-total-price-professional",
    },
    maintenance_plan: {
      itemId: "checkout-item-maintenance-plan",
      totalId: "checkout-total-price-maintenance",
    },
    essential_website_plan: {
      itemId: "checkout-item-essential-website",
      totalId: "checkout-total-price-essential-website",
    },
    business_website_plan: {
      itemId: "checkout-item-business-website",
      totalId: "checkout-total-price-business-website",
    },
    premium_website_plan: {
      itemId: "checkout-item-premium-website",
      totalId: "checkout-total-price-premium-website",
    },
  };

  // Buttons auf der Preise-Seite, die einen Plan auswählen. Jeder Klick
  // speichert nur den Plan-Key in localStorage - die eigentliche Anzeige
  // passiert auf /zusammenarbeit-starten über SUBSCRIPTION_PLANS oben.
  const PLAN_BUTTON_IDS = {
    "basic-plan-btn": "basic_plan",
    "professional-plan-btn": "professional_plan",
    "maintenance-plan-btn": "maintenance_plan",
    "fix-essential-btn": "essential_website_plan",
    "fix-business-btn": "business_website_plan",
    "fix-premium-btn": "premium_website_plan",
  };

  function populateSubscriptionCheckoutOverview() {
    window.retrieveCustomerButton =
      document.getElementById("checkout-btn-email");

    if (window.retrieveCustomerButton) {
      window.retrieveCustomerButton.addEventListener("click", function () {
        if (!checkTextElement(document.getElementById("checkout-input-email")))
          return

        retrieveCustomer(
          document.getElementById("checkout-input-email").value,
          "subscription"
        );
      });

      const subscription = localStorage.getItem("subscription");
      const selectedPlan = SUBSCRIPTION_PLANS[subscription];

      if (selectedPlan) {
        document.getElementById("no-items").style.display = "none";
        document.getElementById("checkout-items-wrapper").style.display =
          "block";
        document.getElementById("checkout-account").style.display = "block";

        Object.keys(SUBSCRIPTION_PLANS).forEach(function (planKey) {
          const plan = SUBSCRIPTION_PLANS[planKey];
          const isActive = planKey === subscription;

          const itemEl = document.getElementById(plan.itemId);
          itemEl && (itemEl.style.display = isActive ? "block" : "none");

          const totalEl = document.getElementById(plan.totalId);
          totalEl && (totalEl.style.display = isActive ? "block" : "none");
        });

        const deleteButtons = document.querySelectorAll("#checkout-delete-item");
        if (deleteButtons) {
          deleteButtons.forEach((deleteButton) => {
            deleteButton.onclick = function () {
              localStorage.removeItem('subscription');
              populateSubscriptionCheckoutOverview();
            };
          });
        }

        // Gedimmte Neukunden-Vorschau anzeigen, solange noch keine E-Mail
        // bestätigt wurde.
        showNewCustomerFormPreview("subscription");
      } else {
        document.getElementById("no-items").style.display = "block";
        document.getElementById("checkout-items-wrapper").style.display =
          "none";
        document.getElementById("checkout-account").style.display = "none";
      }
    }
  }

  function recordPurchaseEvent() {
    if (typeof gtag === 'function') {
      const transactionId = new URLSearchParams(window.location.search).get('session_id');

      // Send a purchase event to Google Analytics
      gtag('event', 'purchase', {
        transaction_id: transactionId,
        ...mapCartToGtag()
      });
    } else {
      console.error("Google Analytics gtag() is not available.");
    }
  }

  function recordSubscriptionEvent() {
    if (typeof gtag === 'function') {
      const subscription = localStorage.getItem('subscription');
      const transactionId = new URLSearchParams(window.location.search).get('session_id');

      // Send a purchase event to Google Analytics
      gtag('event', 'purchase', {
        transaction_id: transactionId,
        currency: "EUR",
        items: {
          item_id: subscription,
          item_name: subscription,
          quantity: 1,
        },
      });
    } else {
      console.error("Google Analytics gtag() is not available.");
    }
  }

  // Modify the existing setup function to call populateCountryDropdown
  function setup() {
    try {
      window.Cart.init(
        "cart-items",
        "cart-item-template",
        "cart-content",
        "cart-error",
        "cart-empty",
        "cart-counter"
      );

      if (window.location.href.indexOf('kauf-erfolgreich') > 0 || window.location.href.indexOf('en/purchase-successful') > 0) {
        recordPurchaseEvent();
        window.Cart.removeAll();
      } else if (window.location.href.indexOf('abonnement-erfolgreich') > 0 || window.location.href.indexOf('en/subscription-successful') > 0) {
        recordSubscriptionEvent();
        localStorage.removeItem('subscription');
      }
    } catch (e) {
      console.error("Error initializing cart", e);
    }

    try {
      KataloopForm.init(
        "wf-form-licenses-form",
        {
          // Social
          100100: { license: LicenceOptions["100100"], priceLabel: "price-social" },
          100200: { license: LicenceOptions["100200"], priceLabel: "price-social" },
          100300: { license: LicenceOptions["100300"], priceLabel: "price-social" },
          100400: { license: LicenceOptions["100400"], priceLabel: "price-social" },
          100500: { license: LicenceOptions["100500"], priceLabel: "price-social" },
          100600: { license: LicenceOptions["100600"], priceLabel: "price-social" },
          100700: { license: LicenceOptions["100700"], priceLabel: "price-social" },
          100800: { license: LicenceOptions["100800"], priceLabel: "price-social" },

          // Web/App
          200100: { license: LicenceOptions["200100"], priceLabel: "price-website" },
          200200: { license: LicenceOptions["200200"], priceLabel: "price-website" },
          200300: { license: LicenceOptions["200300"], priceLabel: "price-website" },
          200400: { license: LicenceOptions["200400"], priceLabel: "price-website" },
          200500: { license: LicenceOptions["200500"], priceLabel: "price-website" },
          200600: { license: LicenceOptions["200600"], priceLabel: "price-website" },
          200700: { license: LicenceOptions["200700"], priceLabel: "price-website" },
          200800: { license: LicenceOptions["200800"], priceLabel: "price-website" },

          // Print
          300100: { license: LicenceOptions["300100"], priceLabel: "price-print" },
          300200: { license: LicenceOptions["300200"], priceLabel: "price-print" },
          300300: { license: LicenceOptions["300300"], priceLabel: "price-print" },
          300400: { license: LicenceOptions["300400"], priceLabel: "price-print" },
          300500: { license: LicenceOptions["300500"], priceLabel: "price-print" },
          300600: { license: LicenceOptions["300600"], priceLabel: "price-print" },
          300700: { license: LicenceOptions["300700"], priceLabel: "price-print" },
          300800: { license: LicenceOptions["300800"], priceLabel: "price-print" },

          // Campaigns (Ads)
          400100: { license: LicenceOptions["400100"], priceLabel: "price-ads" },
          400200: { license: LicenceOptions["400200"], priceLabel: "price-ads" },
          400300: { license: LicenceOptions["400300"], priceLabel: "price-ads" },
          400400: { license: LicenceOptions["400400"], priceLabel: "price-ads" },
          400500: { license: LicenceOptions["400500"], priceLabel: "price-ads" },
          400600: { license: LicenceOptions["400600"], priceLabel: "price-ads" },
          400700: { license: LicenceOptions["400700"], priceLabel: "price-ads" },
          400800: { license: LicenceOptions["400800"], priceLabel: "price-ads" },

          // Film/TV
          500100: { license: LicenceOptions["500100"], priceLabel: "price-film" },
          500200: { license: LicenceOptions["500200"], priceLabel: "price-film" },
          500300: { license: LicenceOptions["500300"], priceLabel: "price-film" },
          500400: { license: LicenceOptions["500400"], priceLabel: "price-film" },
          500500: { license: LicenceOptions["500500"], priceLabel: "price-film" },
          500600: { license: LicenceOptions["500600"], priceLabel: "price-film" },
          500700: { license: LicenceOptions["500700"], priceLabel: "price-film" },
          500800: { license: LicenceOptions["500800"], priceLabel: "price-film" },

          // Enterprise
          600100: { license: LicenceOptions["600100"], priceLabel: undefined },
        },
        {},
        "paragraph-gesamtbetrag",
        "input-gesamtbetrag"
      );
    } catch (e) {
      console.error("Error initializing license form", e);
    }

    populateCountryDropdown();

    window.addToCartButton = document.getElementById("add-to-cart-button");
    window.addToCartButtonText = document.getElementById("add-to-cart-btn-txt");
    window.addToCartButtonIcon = document.getElementById("add-to-cart-btn-icon");

    if (addToCartButton) {
      addToCartButton.addEventListener("click", addToCart);
      addToCartButton.classList.add("cc-disable");
      addToCartButton.disabled = true;

      const product = document.getElementById("product-data").dataset;

      (typeof gtag === "function") && gtag("event", "view_item", {
        currency: "USD",
        value: 30.03,
        items: [
          {
            item_id: product.id,
            item_name: product.title,
          }
        ]
      })
    } else {
      console.error("Add to cart button not found");
    }

    Object.keys(PLAN_BUTTON_IDS).forEach(function (buttonId) {
      const button = document.getElementById(buttonId);
      button &&
        button.addEventListener("click", function () {
          localStorage.setItem("subscription", PLAN_BUTTON_IDS[buttonId]);
        });
    });

    if (document.getElementById("stock-checkout")) {
      populateCheckoutOverview();
    } else if (document.getElementById("subscription-checkout")) {
      populateSubscriptionCheckoutOverview();
    }
  }

  if (checkLoaded()) {
    setup();
  } else {
    window.addEventListener("load", setup);
  }
})();
