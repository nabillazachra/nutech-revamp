export function GET(){
  return Response.json(
    { status:'ok', service:'nutech-revamp' },
    {
      status:200,
      headers:{
        'Cache-Control':'no-store',
      },
    }
  );
}
