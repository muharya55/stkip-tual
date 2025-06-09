type Item = {
  title: string;
  link: string;
  date: string;
};

type SidebarWidgetProps = {
  title: string;
  items: Item[];
};

const SidebarWidget = ({ title, items }: SidebarWidgetProps) => (
  <div>
    <h4>{title}</h4>
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.title}</a>
          <div className="date">{item.date}</div>
        </li>
      ))}
    </ul>
  </div>
);
