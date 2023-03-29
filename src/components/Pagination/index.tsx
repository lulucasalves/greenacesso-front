import { Container, Page } from "./Pagination.style";

export function Pagination({
  paginate,
  page,
  maxPage,
}: {
  page: number;
  paginate: (value: number) => void;
  maxPage: number;
}) {
  const page1 = page > 1 ? (page === maxPage ? page - 2 : page - 1) : page;
  const page2 = page > 1 ? (page === maxPage ? page - 1 : page) : page + 1;
  const page3 = page > 1 ? (page === maxPage ? page : page + 1) : page + 2;

  return (
    <Container>
      {page > 1 && (
        <Page active={false} onClick={() => paginate(page - 1)}>
          {"<"}
        </Page>
      )}
      <Page active={page === page1} onClick={() => paginate(page1)}>
        {page1}
      </Page>
      <Page active={page === page2} onClick={() => paginate(page2)}>
        {page2}
      </Page>
      <Page active={page === page3} onClick={() => paginate(page3)}>
        {page3}
      </Page>
      {page < maxPage && (
        <Page active={false} onClick={() => paginate(page + 1)}>
          {">"}
        </Page>
      )}
    </Container>
  );
}
