export interface ProductLine {
  code: string
  name: string
  desc: string
  features: string[]
}

export interface ProductCategory {
  slug: string
  brand: string
  origin: string
  name: string
  shortDesc: string
  heroDesc: string
  highlights: string[]
  lines: ProductLine[]
  applications: string[]
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: 'cap-taiyo',
    brand: 'Taiyo Cabletec',
    origin: 'Nhật Bản',
    name: 'Cáp Taiyo',
    shortDesc:
      'Cáp robot và cáp điều khiển chịu uốn cao của Taiyo Cabletec (Nhật Bản) cho xích dẫn cáp, cánh tay robot và máy công cụ.',
    heroDesc:
      'Taiyo Cabletec là thương hiệu cáp công nghiệp hàng đầu Nhật Bản, nổi tiếng với các dòng cáp chịu uốn siêu bền dùng cho bộ phận chuyển động liên tục: xích dẫn cáp (cable chain), cánh tay robot, AGV và máy gia công CNC. Camtech phân phối chính hãng các dòng cáp Taiyo với đầy đủ chứng nhận CE, UL.',
    highlights: [
      'Chịu uốn lặp lại hàng chục triệu lần trong xích dẫn cáp',
      'Đạt chứng nhận CE, UL — an toàn cho xuất khẩu thiết bị',
      'Chống nhiễu tốt nhờ lớp bọc chống nhiễu bện chặt',
      'Kho hàng sẵn, cắt theo mét, giao nhanh toàn quốc',
    ],
    lines: [
      {
        code: 'EXT-II Series',
        name: 'Cáp robot chịu uốn cao',
        desc: 'Dòng cáp chuyên dụng cho bộ phận chuyển động như xích dẫn cáp, cánh tay robot và AGV, thiết kế cho tuổi thọ uốn vượt trội.',
        features: ['Chịu uốn liên tục tốc độ cao', 'Lõi đồng mềm bện siêu mịn', 'Vỏ cách điện chống dầu, chống mài mòn'],
      },
      {
        code: 'VCTF23NXX',
        name: 'Cáp điều khiển có lưới chống nhiễm',
        desc: 'Cáp điều khiển nhiều lõi có bọc chống nhiễu, dùng cho tủ điện, máy công cụ và hệ thống tự động hóa yêu cầu tín hiệu ổn định.',
        features: ['Lớp chống nhiễu bện đồng', 'Nhiều kích thước lõi: 0.5 – 2.0 mm²', 'Số lõi linh hoạt theo nhu cầu'],
      },
      {
        code: 'EXT-3D Series',
        name: 'Cáp chuyển động 3 chiều',
        desc: 'Cáp chịu xoắn và uốn đa trục cho cổ tay robot, ứng dụng gắp — đặt và hàn trong dây chuyền tự động.',
        features: ['Chịu xoắn ±360°/m', 'Thiết kế cho cổ tay robot 6 trục', 'Bền trong môi trường dầu cắt gọt'],
      },
      {
        code: 'Cáp chịu nhiệt Taiyo',
        name: 'Cáp silicone & chịu nhiệt',
        desc: 'Cáp cách điện silicone và sợi thủy tinh cho khu vực nhiệt độ cao như lò sấy, động cơ, máy phát điện.',
        features: ['Dải nhiệt độ làm việc đến ~200°C', 'Cách điện silicone dẻo, không giòn', 'Chống cháy lan, ít khói'],
      },
    ],
    applications: ['Xích dẫn cáp máy CNC', 'Cánh tay robot & AGV', 'Tủ điện điều khiển', 'Thiết bị xuất khẩu sang Nhật, EU, Mỹ'],
  },
  {
    slug: 'cap-kuramo',
    brand: 'Kuramo Electric',
    origin: 'Nhật Bản',
    name: 'Cáp Kuramo',
    shortDesc:
      'Cáp truyền thông công nghiệp và cáp robot Kuramo (Nhật Bản): CC-Link, EtherCAT, DeviceNet, Profibus, cáp chịu uốn KDF.',
    heroDesc:
      'Kuramo Electric là nhà sản xuất cáp truyền thông công nghiệp (FA) uy tín của Nhật Bản, chuyên cáp mạng fieldbus và Ethernet công nghiệp đạt chuẩn các hiệp hội CLPA, ODVA, PI... Cùng với đó là dòng cáp chịu uốn KDF cho robot và xích dẫn cáp. Camtech cung cấp trọn vẹn giải pháp cáp Kuramo cho hệ thống tự động hóa nhà máy.',
    highlights: [
      'Đầy đủ cáp chuẩn CC-Link, EtherCAT, DeviceNet, Profibus, Profinet',
      'Cáp chịu uốn KDF cho robot và xích dẫn cáp',
      'Truyền tín hiệu ổn định, chống nhiễu môi trường nhà máy',
      'Hỗ trợ kỹ thuật chọn cáp theo đúng chuẩn mạng',
    ],
    lines: [
      {
        code: 'KDF Series',
        name: 'Cáp chịu uốn cho robot & xích dẫn',
        desc: 'Cáp nguồn và tín hiệu chịu uốn dùng trong xích dẫn cáp, robot và thiết bị chuyển động liên tục.',
        features: ['Tuổi thọ uốn cao', 'Có loại bọc chống nhiễu (KDF-SB)', 'Dải tiết diện phong phú'],
      },
      {
        code: 'FANC-110SBH',
        name: 'Cáp CC-Link',
        desc: 'Cáp chuẩn CC-Link cho kết nối PLC, remote I/O, biến tần trong hệ thống tự động hóa Mitsubishi và các hãng khác.',
        features: ['Chuẩn CLPA', 'Đặc tuyến 110Ω', 'Bọc chống nhiễu kép'],
      },
      {
        code: 'FANC-IEF-SB / KETH Series',
        name: 'Cáp Ethernet công nghiệp',
        desc: 'Cáp EtherCAT, Profinet, EtherNet/IP và LAN công nghiệp chống nhiễu, truyền tốc độ cao trong môi trường nhà máy.',
        features: ['Hỗ trợ Gigabit', 'Cáp cố định và cáp chịu uốn', 'Chống nhiễu EMI/EMC'],
      },
      {
        code: 'KND-SB / PRF-SB',
        name: 'Cáp DeviceNet & Profibus',
        desc: 'Cáp fieldbus chuẩn ODVA (DeviceNet) và PI (Profibus) cho hệ thống điều khiển phân tán.',
        features: ['Trunk & drop cable DeviceNet', 'Cáp Profibus-DP 150Ω', 'Đầy đủ phụ kiện đấu nối'],
      },
    ],
    applications: ['Mạng CC-Link/EtherCAT nhà máy', 'Kết nối PLC — remote I/O', 'Robot & xích dẫn cáp', 'Hệ thống SCADA/FA'],
  },
  {
    slug: 'khi-nen-sfc',
    brand: 'SFC',
    origin: 'Đài Loan / Trung Quốc',
    name: 'Phụ kiện khí nén SFC',
    shortDesc:
      'Phụ kiện khí nén SFC: ống khí PU Polyurethane đủ size Ø4×2.5mm – Ø16×14mm và fitting (khớp nối) — chất lượng ổn định, giá tối ưu.',
    heroDesc:
      'Với thương hiệu SFC, Camtech tập trung vào phụ kiện khí nén: ống khí PU và fitting (khớp nối). Ống PU SFC sản xuất từ nhựa Thermoplastic Polyurethane — mềm dẻo, chịu mài mòn, kích thước chính xác, dùng cho khí nén, nước và chân không — là lựa chọn kinh tế và tin cậy cho mọi hệ thống khí nén trong nhà máy.',
    highlights: [
      'Ống khí PU đủ size từ Ø4×2.5mm đến Ø16×14mm',
      'Nhiều màu nhận diện: xanh dương, đen, đỏ, vàng, trong…',
      'Chất lượng ổn định, giá thành cạnh tranh',
      'Hàng sẵn kho, cắt lẻ theo mét, giao nhanh toàn quốc',
    ],
    lines: [
      {
        code: 'PU-0425 → PU-1614',
        name: 'Ống khí PU Polyurethane',
        desc: 'Ống khí PU dạng cuộn đủ size Ø4–16 mm (cả size inch), cuộn 100–200 m, áp làm việc 8–10 bar, dùng cho đường khí cấp và đường điều khiển.',
        features: ['Vật liệu Thermoplastic Polyurethane', 'Nhiệt độ dùng −20°C ~ +80°C', 'Nhiều màu theo dây chuyền'],
      },
      {
        code: 'PUC Series',
        name: 'Ống xoắn lò xo PUC',
        desc: 'Ống PU định hình xoắn lò xo tự co rút, chuyên dùng cho súng xịt khí, dụng cụ khí nén cầm tay và cổ tay robot.',
        features: ['Co dãn như lò xo, gọn gàng', 'Chiều dài sử dụng 1–25 m', 'Đủ size Ø4–Ø12 mm'],
      },
      {
        code: 'Fittings',
        name: 'Fitting — khớp nối khí nén',
        desc: 'Khớp nối nhanh PC/PL/PE, van tiết lưu, van một chiều đi kèm các size ống khí — đang được cập nhật trên website, liên hệ Camtech để đặt hàng.',
        features: ['Đủ size theo ống 4–16 mm', 'Khớp nối nhanh một chạm', 'Có loại inox cho môi trường đặc biệt'],
      },
    ],
    applications: ['Đường khí nén nhà xưởng', 'Đường khí điều khiển xy lanh, van', 'Dụng cụ khí nén cầm tay', 'Máy đóng gói, máy cơ khí'],
  },
  {
    slug: 'khi-nen-chanto',
    brand: 'Chanto',
    origin: 'Đài Loan',
    name: 'Khí nén Chanto',
    shortDesc:
      'Thiết bị khí nén Chanto (Đài Loan): xy lanh compact, xy lanh không trục, kẹp khí nén, van điện từ và bàn xoay khí nén chính xác.',
    heroDesc:
      'Chanto (Đài Loan) là thương hiệu khí nén hơn 40 năm kinh nghiệm, mạnh về các dòng xy lanh compact, xy lanh dẫn hướng, xy lanh không trục, kẹp góc (clamp) và bàn xoay khí nén độ chính xác cao — phù hợp máy tự động hóa đòi hỏi độ tin cậy và độ lặp lại. Camtech là đối tác cung cấp sản phẩm Chanto chính hãng tại Việt Nam.',
    highlights: [
      'Thương hiệu Đài Loan hơn 40 năm, xuất khẩu toàn cầu',
      'Độ chính xác lặp lại cao cho máy tự động',
      'Nhiều dòng đặc chủng: không trục, kẹp góc, bàn xoay',
      'Tương thích thay thế các hãng Nhật cùng phân khúc',
    ],
    lines: [
      {
        code: 'JC / JD / JG Series',
        name: 'Xy lanh compact & dẫn hướng',
        desc: 'Xy lanh compact tiết kiệm không gian và xy lanh dẫn hướng chống xoay cho gá kẹp chính xác.',
        features: ['Kích thước gọn, lực đẩy lớn', 'Gắn cảm biến từ mặt ngoài', 'Độ lặp lại cao'],
      },
      {
        code: 'R Series',
        name: 'Xy lanh không trục (rodless)',
        desc: 'Xy lanh không trục hành trình dài, gọn nhẹ, dùng cho trục chuyển động ngang trong máy tự động.',
        features: ['Hành trình đến vài mét', 'Tải ngang tốt, trượt êm', 'Tiết kiệm không gian lắp đặt'],
      },
      {
        code: 'CHK / HFR Series',
        name: 'Kẹp khí nén & tay gắp',
        desc: 'Kẹp góc (clamp) cho gá đồ hàn và tay gắp khí nén (gripper) 2/3 chấu cho robot gắp sản phẩm.',
        features: ['Lực kẹp lớn, giữ an toàn khi mất khí', 'Gripper song song & góc', 'Nhiều kích thước chấu'],
      },
      {
        code: 'RTB / MSQ Series',
        name: 'Bàn xoay & xy lanh xoay',
        desc: 'Bàn xoay khí nén rack-pinion góc 90°/180°, chính xác, cho cơ cấu lật — xoay trong chuyền máy.',
        features: ['Góc xoay tinh chỉnh', 'Giảm chấn thủy lực tùy chọn', 'Lắp đặt đa hướng'],
      },
    ],
    applications: ['Máy tự động hóa chính xác', 'Gá kẹp hàn — lắp ráp', 'Robot gắp nhặt sản phẩm', 'Cơ cấu lật xoay chuyền máy'],
  },
]

export const SERVICES = [
  {
    title: 'Tư vấn & thiết kế hệ thống',
    desc: 'Tư vấn chọn cáp, thiết kế hệ khí nén — tự động hóa theo yêu cầu dây chuyền thực tế.',
  },
  {
    title: 'Lập trình & sửa chữa PLC',
    desc: 'Lập trình, bảo trì, sửa chữa PLC các hãng: Schneider, Mitsubishi, Siemens, Omron...',
  },
  {
    title: 'Thiết bị thủy lực & đo lường',
    desc: 'Cung cấp thiết bị thủy lực, cảm biến và thiết bị đo lường — điều khiển cho nhà máy.',
  },
]
